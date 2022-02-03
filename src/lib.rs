//! Basic example of rendering in the browser

mod lists;
use js_sys::Function;
use js_sys::IntoIter;
use js_sys::WebAssembly::Global;
use lists::*;

use chrono::NaiveDate;
use chrono::NaiveDateTime;
use parking_lot::Mutex;
use piet::kurbo::Circle;
use piet::kurbo::Ellipse;
use piet::kurbo::Point;
use piet::kurbo::Vec2;
use piet::Color;
use piet::FontFamily;
use piet::Text;
use piet::TextAttribute;
use piet::TextLayoutBuilder;
use sgp4::Constants;
use sgp4::Elements;
use sgp4::Prediction;
use std::ops::Sub;
use std::sync::Arc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::Element;
use web_sys::{window, HtmlCanvasElement};

use piet::RenderContext;
use piet_web::WebRenderContext;

macro_rules! log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (web_sys::console::log_1(&format_args!($($t)*).to_string().into()))
}

/// parse a TLE list
fn parse_tle_list(list: &str) -> anyhow::Result<Vec<Elements>> {
    let lines = list
        .split('\n')
        .map(|x| x.trim())
        .filter(|x| !x.is_empty())
        .collect::<Vec<_>>();
    anyhow::ensure!(
        lines.len() % 3 == 0,
        "must be a multiple of 3 lines, name, TLE1, TLE2"
    );
    let mut res = Vec::new();
    for chunk in lines.chunks(3) {
        let name = chunk[0];
        let tle1 = chunk[1];
        let tle2 = chunk[2];
        let elements = Elements::from_tle(Some(name.to_owned()), tle1.as_bytes(), tle2.as_bytes())
            .map_err(sgp4_to_anyhow)?;
        if !name.starts_with('#') {
            res.push(elements);
        }
    }
    Ok(res)
}

fn chrono_epoch(elements: &Elements) -> NaiveDateTime {
    // j2000 year
    let j2000_year = elements.epoch();
    // j2000 secs, just multiply with 365 1/4 days (julian calendar)
    let j2000_secs = j2000_year * 365.25 * 24.0 * 3600.0;
    // add number of seconds since 1970 to get unix timestamp
    let j1970_secs = j2000_secs + 30.0 * 365.25 * 24.0 * 3600.0;
    // split into whole and fractional part
    let j1970_secs_i64 = j1970_secs.floor() as i64;
    let j1970_ns_u64 = (j1970_secs.fract() * 1000000000.0) as u32;
    // done
    NaiveDateTime::from_timestamp(j1970_secs_i64, j1970_ns_u64)
}

struct Sat {
    elements: Elements,
    constants: Constants<'static>,
    color: Color,
    radius: (f64, f64),
    label: Option<String>,
}

impl Sat {
    fn from_elements(elements: Elements, color: Color, radius: (f64, f64)) -> anyhow::Result<Self> {
        let constants = Constants::from_elements(&elements).map_err(sgp4_to_anyhow)?;
        let label = elements.object_name.clone();
        Ok(Self {
            elements,
            constants,
            color,
            label,
            radius,
        })
    }
    fn from_tle(
        name: &str,
        tle1: &str,
        tle2: &str,
        color: Color,
        radius: (f64, f64),
    ) -> anyhow::Result<Self> {
        let elements = Elements::from_tle(Some(name.into()), tle1.as_bytes(), tle2.as_bytes())
            .map_err(sgp4_to_anyhow)?;
        Self::from_elements(elements, color, radius)
    }
    fn propagate_to(&self, t: NaiveDateTime) -> anyhow::Result<Prediction> {
        let epoch = chrono_epoch(&self.elements);
        let elapsed = t.sub(epoch);
        let minutes = (elapsed.num_milliseconds() as f64) / 1000.0 / 60.0;
        let res = self.constants.propagate(minutes).map_err(sgp4_to_anyhow)?;
        Ok(res)
    }
}

const BLUE: Color = Color::rgb8(0x00, 0x00, 0x80);
const GREEN: Color = Color::rgb8(0x00, 0xFF, 0x00);
const RED: Color = Color::rgb8(0xFF, 0x00, 0x00);
const DARKRED: Color = Color::rgb8(0x7F, 0x00, 0x00);
const BLACK: Color = Color::rgb8(0x00, 0x00, 0x00);
const GRAY: Color = Color::rgb8(0x80, 0x80, 0x80);
const WHITE: Color = Color::rgb8(0xFF, 0xFF, 0xFF);
const YELLOW: Color = Color::rgb8(0xFF, 0xFF, 0x00);
const TRANSPARENT_GRAY: Color = Color::rgba8(0xFF, 0xFF, 0xFF, 0x3F);

fn sgp4_to_anyhow(e: sgp4::Error) -> anyhow::Error {
    anyhow::anyhow!("sgp4 error {}", e)
}

struct Sprite {
    position: [f64; 3],
    label: Option<String>,
    color: Color,
    radius: (f64, f64),
}

fn visual_data(name: &str) -> (Color, (f64, f64)) {
    if name.starts_with("STARLINK") {
        (YELLOW, (50.0, 50.0))
    } else if name.starts_with("ISS") {
        (WHITE, (100.0, 100.0))
    } else if name.starts_with("TIANHE") {
        (WHITE, (100.0, 100.0))
    } else if name.contains("NAVSTAR") {
        (BLUE, (100.0, 100.0))
    } else if name.starts_with("GSAT") {
        (GREEN, (100.0, 100.0))
    } else if name.contains("GLONASS-M") {
        (DARKRED, (100.0, 100.0))
    } else if name.starts_with("BEIDOU") {
        (RED, (100.0, 100.0))
    } else if name.starts_with("STARLINK") {
        (YELLOW, (100.0, 100.0))
    } else {
        (WHITE, (50.0, 50.0))
    }
}

fn draw(sats: &[Sat], state: Arc<Mutex<GlobalState>>) -> anyhow::Result<()> {
    let state = state.lock();
    let t0 = state.t0;
    let tc = current_time();
    let dt = tc - t0;
    let t1 = t0 + dt * 100;
    log!("{}", tc);
    let window1 = window().unwrap();
    let window2 = window().unwrap();
    let canvas = window1
        .document()
        .unwrap()
        .get_element_by_id("canvas")
        .unwrap()
        .dyn_into::<HtmlCanvasElement>()
        .unwrap();
    let context = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<web_sys::CanvasRenderingContext2d>()
        .unwrap();

    let dpr = window1.device_pixel_ratio();
    let pw: f64 = canvas.offset_width() as f64;
    let ph: f64 = canvas.offset_height() as f64;
    let ox = pw / 2.;
    let oy = ph / 2.;
    let s = ox.min(oy);
    let view = state.view;
    canvas.set_width(pw as u32);
    canvas.set_height(ph as u32);
    // let _ = context.scale(dpr, dpr);

    let mut rc = WebRenderContext::new(context, window2);

    rc.clear(None, Color::BLACK);
    let px = |x: f64| x / view * s + ox;
    let py = |y: f64| y / view * s + oy;
    let vx = |x: f64| x / view * s;
    let vy = |y: f64| y / view * s;

    let layout = rc
        .text()
        .new_text_layout(format!("simulation time: {}", t1.format("%Y-%m-%d %H:%M:%S.%f").to_string()))
        .font(FontFamily::SYSTEM_UI, 12.0)
        .default_attribute(TextAttribute::TextColor(WHITE))
        .build()
        .unwrap();
    rc.draw_text(&layout, (0., 0.));
    let mouse_position = Point::new(state.mouse.0 as f64, state.mouse.1 as f64);
    let mut sprites = sats
        .iter()
        .map(|sat| {
            let prediction = sat.propagate_to(t1)?;
            let x = px(prediction.position[0]);
            let y = py(prediction.position[2]);
            let label = sat.label.as_ref().and_then(|text| {
                if text.starts_with("ISS") || text.starts_with("TIANHE") || Point::new(x, y).distance(mouse_position) < 10.0 {
                    Some(text.clone())
                } else {
                    None
                }
            });
            Ok(Sprite {
                position: prediction.position,
                color: sat.color.clone(),
                label,
                radius: sat.radius,
            })
        })
        .collect::<anyhow::Result<Vec<_>>>()
        .unwrap();
    sprites.push(Sprite {
        position: [0., 0., 0.],
        color: BLUE.clone(),
        label: None,
        radius: (6378.0, 6356.0),
    });
    sprites.sort_by_key(|x| x.position[1] as i64);
    for sat in sprites {
        let x = px(sat.position[0]);
        let y = py(sat.position[2]);
        let rx = vx(sat.radius.0);
        let ry = vy(sat.radius.1);
        rc.fill(
            Ellipse::new(
                (x, y),
                (rx, ry),
                0.0,
            ),
            &sat.color,
        );
        if let Some(name) = sat.label.clone() {
            let layout = rc
                .text()
                .new_text_layout(name)
                .font(FontFamily::SYSTEM_UI, 12.0)
                .default_attribute(TextAttribute::TextColor(RED))
                .build()
                .unwrap();
            rc.draw_text(&layout, (x + rx, y + ry));
        }
    }

    rc.finish().unwrap();
    Ok(())
}

fn current_time() -> NaiveDateTime {
    let t = js_sys::Date::now();
    let seconds = (t / 1000.0).floor() as i64;
    let nanos = ((t / 1000.0).fract() * 1000000000.0) as u32;
    NaiveDateTime::from_timestamp(seconds, nanos)
}

fn make_sats() -> anyhow::Result<Vec<Sat>> {
    let mut tles = Vec::new();
    tles.extend(parse_tle_list(ACTIVE)?);
    // tles.extend(parse_tle_list(STATIONS)?);
    // tles.extend(parse_tle_list(GPS)?);
    // tles.extend(parse_tle_list(STARLINK)?);
    // tles.extend(parse_tle_list(BEIDOU)?);
    // tles.extend(parse_tle_list(GALILEO)?);
    // tles.extend(parse_tle_list(ASAT)?);
    let sats = tles
        .into_iter()
        .map(|x| {
            let (color, radius) = x
                .object_name
                .as_ref()
                .map(|x| visual_data(x))
                .unwrap_or((WHITE, (100.0, 100.0)));
            Sat::from_elements(x, color, radius)
        })
        .collect::<anyhow::Result<Vec<_>>>()?;
    Ok(sats)
}

struct GlobalState {
    mouse: (i32, i32),
    view: f64,
    t0: NaiveDateTime,
}

impl GlobalState {
    fn new(t0: NaiveDateTime, view: f64) -> Self {
        Self { mouse: Default::default(), t0, view }
    }
}

#[wasm_bindgen]
pub fn run() {
    #[cfg(feature = "console_error_panic_hook")]
    std::panic::set_hook(Box::new(console_error_panic_hook::hook));

    let canvas = window()
        .unwrap()
        .document()
        .unwrap()
        .get_element_by_id("canvas")
        .unwrap()
        .dyn_into::<HtmlCanvasElement>()
        .unwrap();

    let t0 = current_time();
    let state = GlobalState::new(t0, 20000.0);
    let state = Arc::new(Mutex::new(state));
    let state_1 = state.clone();

    let closure = Closure::wrap(Box::new(move |event: web_sys::MouseEvent| {
        let mut p = state_1.lock();
        p.mouse = (event.x(), event.y());        
    }) as Box<dyn FnMut(_)>);
    canvas.add_event_listener_with_callback("mousemove", closure.as_ref().unchecked_ref()).unwrap();
    closure.forget();

    let state_1 = state.clone();
    let closure = Closure::wrap(Box::new(move |event: web_sys::WheelEvent| {
        let mut p = state_1.lock();
        let dy = event.delta_y();
        let scale = (1.0 + dy / 1000.0).max(0.1).min(10.0);
        let view1 = (p.view * scale).max(10000.0).min(100000.0);
        p.view = view1;
        log!("{}", scale);
    }) as Box<dyn FnMut(_)>);
    canvas.add_event_listener_with_callback("wheel", closure.as_ref().unchecked_ref()).unwrap();
    closure.forget();

    let sats = make_sats().unwrap();
    let closure: Closure<dyn FnMut()> = Closure::wrap(Box::new(move || draw(&sats, state.clone()).unwrap()));

    window()
        .unwrap()
        .set_interval_with_callback_and_timeout_and_arguments_0(
            closure.as_ref().unchecked_ref(),
            20,
        )
        .unwrap();
    closure.forget();
}
