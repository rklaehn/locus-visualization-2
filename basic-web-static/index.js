/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./dist/locus_visualization_2_bg.wasm": function() {
/******/ 			return {
/******/ 				"./locus_visualization_2_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_693216e109162396": function() {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_new_693216e109162396"]();
/******/ 					},
/******/ 					"__wbg_stack_0ddaca5d1abfb52f": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_stack_0ddaca5d1abfb52f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_09919627ac0992f5": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_error_09919627ac0992f5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_434ce1849eb4e0fc": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_instanceof_Window_434ce1849eb4e0fc"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_5edd43643d1060d9": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_document_5edd43643d1060d9"](p0i32);
/******/ 					},
/******/ 					"__wbg_devicePixelRatio_9632545370d525ae": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_devicePixelRatio_9632545370d525ae"](p0i32);
/******/ 					},
/******/ 					"__wbg_setInterval_fcb622396840b607": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_setInterval_fcb622396840b607"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_b30e88aff96f66a1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_getElementById_b30e88aff96f66a1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_6bdba88519fdc1c9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_addEventListener_6bdba88519fdc1c9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_width_39518819e924dd3e": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_width_39518819e924dd3e"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaY_afa6edde136e1500": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_deltaY_afa6edde136e1500"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_a6157e470d06b638": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_a6157e470d06b638"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_362e8db8cbadbe96": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_setwidth_362e8db8cbadbe96"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setheight_28f53831182cc410": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_setheight_28f53831182cc410"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getContext_bd4e9445094eda84": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_getContext_bd4e9445094eda84"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_log_fbd13631356d44e4": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_log_fbd13631356d44e4"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetWidth_bc683e2f57ea2d6b": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_offsetWidth_bc683e2f57ea2d6b"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetHeight_f9c07ea59e2218bf": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_offsetHeight_f9c07ea59e2218bf"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_e8b3a478a1b32d55": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_e8b3a478a1b32d55"](p0i32);
/******/ 					},
/******/ 					"__wbg_canvas_fa1a0cab6345438d": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_canvas_fa1a0cab6345438d"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_4c9ff9ea0c0c4092": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_setstrokeStyle_4c9ff9ea0c0c4092"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_680401a47926faa5": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_setfillStyle_680401a47926faa5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfont_c663e63d7b867055": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_setfont_c663e63d7b867055"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_beginPath_5a6fcb370b5b8eb3": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_beginPath_5a6fcb370b5b8eb3"](p0i32);
/******/ 					},
/******/ 					"__wbg_fill_67fc6f7c7ef34cc6": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_fill_67fc6f7c7ef34cc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_bezierCurveTo_2dc77b8e4ff58f6f": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64,p6f64) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_bezierCurveTo_2dc77b8e4ff58f6f"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64,p6f64);
/******/ 					},
/******/ 					"__wbg_closePath_7dd4240623fb3d63": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_closePath_7dd4240623fb3d63"](p0i32);
/******/ 					},
/******/ 					"__wbg_lineTo_bf1ae7e03c425ceb": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_lineTo_bf1ae7e03c425ceb"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_8e1f630823114343": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_moveTo_8e1f630823114343"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_quadraticCurveTo_d0d7675e48300f8a": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_quadraticCurveTo_d0d7675e48300f8a"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_restore_e75499e3249684ee": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_restore_e75499e3249684ee"](p0i32);
/******/ 					},
/******/ 					"__wbg_save_930c4db44f1e2c73": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_save_930c4db44f1e2c73"](p0i32);
/******/ 					},
/******/ 					"__wbg_fillText_baf70e9d9b7affdd": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_fillText_baf70e9d9b7affdd"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_measureText_c318f8e43e1d77ca": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_measureText_c318f8e43e1d77ca"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_x_7cfbda740109f61d": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_x_7cfbda740109f61d"](p0i32);
/******/ 					},
/******/ 					"__wbg_y_6eb390c20d49c7d4": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_y_6eb390c20d49c7d4"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_f579424187aa1717": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_newnoargs_f579424187aa1717"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_89558c3e96703ca1": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_call_89558c3e96703ca1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_now_e6c39c10a5e8aec7": function() {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_now_e6c39c10a5e8aec7"]();
/******/ 					},
/******/ 					"__wbg_self_e23d74ae45fb17d1": function() {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_self_e23d74ae45fb17d1"]();
/******/ 					},
/******/ 					"__wbg_window_b4be7f48b24ac56e": function() {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_window_b4be7f48b24ac56e"]();
/******/ 					},
/******/ 					"__wbg_globalThis_d61b1f48a57191ae": function() {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_globalThis_d61b1f48a57191ae"]();
/******/ 					},
/******/ 					"__wbg_global_e7669da72fd7f239": function() {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbg_global_e7669da72fd7f239"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper113": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_closure_wrapper113"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper115": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_closure_wrapper115"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper117": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./dist/locus_visualization_2_bg.js"].exports["__wbindgen_closure_wrapper117"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./dist/locus_visualization_2_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./dist/locus_visualization_2_bg.wasm":"9c5c989f30e11bf627a8"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./dist/locus_visualization_2 */ \"./dist/locus_visualization_2.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });