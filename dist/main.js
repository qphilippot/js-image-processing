/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"tesseract.js\",\"_id\":\"tesseract.js@1.0.19\",\"_inBundle\":false,\"_integrity\":\"sha512-UXnCd2GkDOuVwPYv8MryzDwXEPLJ/BjEuT76PWzVC8XhZbsChRkpoiKDSGDbZ2BW2rwg1yBWJ0joSdCTw1umBA==\",\"_location\":\"/tesseract.js\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"tesseract.js\",\"name\":\"tesseract.js\",\"escapedName\":\"tesseract.js\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.19.tgz\",\"_shasum\":\"f66a9accef1aa933ec7e574d1bb3205f7d2aef65\",\"_spec\":\"tesseract.js\",\"_where\":\"/home/quentin/dev/image-processing\",\"author\":\"\",\"browser\":{\"./src/node/index.js\":\"./src/browser/index.js\"},\"bugs\":{\"url\":\"https://github.com/naptha/tesseract.js/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"file-type\":\"^3.8.0\",\"is-url\":\"1.2.2\",\"isomorphic-fetch\":\"^2.2.1\",\"jpeg-js\":\"^0.2.0\",\"level-js\":\"^2.2.4\",\"node-fetch\":\"^1.6.3\",\"object-assign\":\"^4.1.0\",\"png.js\":\"^0.2.1\",\"tesseract.js-core\":\"^1.0.2\"},\"deprecated\":false,\"description\":\"Pure Javascript Multilingual OCR\",\"devDependencies\":{\"babel-preset-es2015\":\"^6.16.0\",\"babelify\":\"^7.3.0\",\"browserify\":\"^13.1.0\",\"concurrently\":\"^3.1.0\",\"envify\":\"^3.4.1\",\"http-server\":\"^0.9.0\",\"pako\":\"^1.0.3\",\"uglify-js\":\"^3.4.9\",\"watchify\":\"^3.7.0\"},\"homepage\":\"https://github.com/naptha/tesseract.js\",\"license\":\"Apache-2.0\",\"main\":\"src/index.js\",\"name\":\"tesseract.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/naptha/tesseract.js.git\"},\"scripts\":{\"build\":\"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js\",\"release\":\"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish\",\"start\":\"concurrently --kill-others \\\"watchify src/index.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\\\" \\\"watchify src/browser/worker.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\\\" \\\"http-server -p 7355\\\"\"},\"version\":\"1.0.19\"}");

/***/ }),

/***/ "./node_modules/tesseract.js/src/browser/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/browser/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',    
    langPath: 'https://tessdata.projectnaptha.com/3.02/',
}

if (process.env.TESS_ENV === "development") {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{
    var version = __webpack_require__(/*! ../../package.json */ "./node_modules/tesseract.js/package.json").version;
    defaultOptions.workerPath = 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@' + version + '/dist/worker.js'
}

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(Blob && URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'], {
            type: 'application/javascript'
        });
        var worker = new Worker(URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            im.onerror = e => { throw e; };
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            
            xhr.onload = e => {
                if (xhr.status >= 400){
                  throw new Error('Fail to get image as Blob');
                }else{
                    loadImage(xhr.response, cb);
                }
            };
            xhr.onerror = e => { throw e; }; 
            
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.onerror = e => { throw e; }; 
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/circularize.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/circularize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/job.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/job.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ../node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ./node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")
const circularize = __webpack_require__(/*! ./common/circularize.js */ "./node_modules/tesseract.js/src/common/circularize.js")
const TesseractJob = __webpack_require__(/*! ./common/job */ "./node_modules/tesseract.js/src/common/job.js");
const version = __webpack_require__(/*! ../package.json */ "./node_modules/tesseract.js/package.json").version;

const create = function(workerOptions = {}){
	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	recognize(image, options = {}){
		return this._delay(job => {
			if (typeof options === 'string') options = {lang: options}
			options.lang = options.lang || 'eng';

			job._send('recognize', { image, options, workerOptions: this.workerOptions });
		})
	}
	detect(image, options = {}){
		return this._delay(job => {
			job._send('detect', { image, options, workerOptions: this.workerOptions });
		})
	}

	terminate(){
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
		this._currentJob = null;
		this._queue = [];
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift();
			this._currentJob = job;
			fn(job);
		});
		if(!this._currentJob) this._dequeue();
		return job;
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length){
			this._queue[0]();
		}
	}

	_recv(packet){
        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		} else {
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

module.exports = create();


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.Viewer = __webpack_require__(/*! ./models/layout/viewer.model */ "./src/models/layout/viewer.model.js");
window.RGBAImage = __webpack_require__(/*! ./models/Image/RGBAImage.model */ "./src/models/Image/RGBAImage.model.js");
window.Transformations = {
    RGBAToGrayscale: __webpack_require__(/*! ./transformations/converters/RGBAToGrayscale.converter */ "./src/transformations/converters/RGBAToGrayscale.converter.js"),
    OCR: __webpack_require__(/*! ./transformations/OCR/tesseract.ocr */ "./src/transformations/OCR/tesseract.ocr.js")
};

class MyCanvas {
    constructor(canvas_id) {
        this.dom_elt = document.getElementById(canvas_id);
        this.context = this.dom_elt.getContext('2d');
        this.image = null;
        this.imageElt = null;
    }

    setSize(width, height) {
        this.width = width;
        //this.context.width = width;
        this.dom_elt.width = width;
        this.dom_elt.style.width = width  + 'px';

        this.height = height;
        // this.context.height = height;
        this.dom_elt.height = height;
        this.dom_elt.style.height = height + 'px';
    }

    clear() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.width, this.height);
    }

    openImage(blob) {
        const reader = new FileReader();
        reader.onload = () => {
            const image = new Image();
            image.onload = () => {
                this.setImage(image);
            };

            image.src = reader.result;
        };

        reader.readAsDataURL(blob);
    }

    loadImage(url) {
        const imageElt = new Image();
        image.crossOrigin = "";
        image.src = url;
        image.onload = () => {
            this.setImage(image);
        }
    }

    reset() {
        this.drawImageData(this.getImage());
    }

    setImage(image) {
        this.imageElt = image;
        console.log(image.width, image.height)
        this.setSize(image.width, image.height);
        this.context.drawImage(image,0,0);

        this.image = this.context.getImageData(0, 0, this.width, this.height);
    }

    drawImage(image) {
        console.log(image)
        this.context.drawImage(image, 0, 0);
    }

    sobel(image) {
        

            // todo grayscale
        return output;
    }

    getGrayscale(image) {
          
    }

    thresholding(threshold) {
        const input = this.getGrayscale(this.getImage());
        const pixels = input.data; 

        const output = this.context.createImageData(this.width, this.height);

        for(var i = 0; i < pixels.length; i += 4) {
            const intensity = (pixels[i] >= threshold) ? 255 : 0; 

            output.data[i] = intensity;
            output.data[i + 1] = intensity;
            output.data[i + 2] = intensity;
            output.data[i + 3] = 255;

        }

        return output;
    }

    drawImageData(imageData) {
        console.log('drawImageData', imageData);
        this.context.putImageData(imageData, 0, 0);
    }

    getImage() {
        return this.image;
    }

    threshold() {
        //
    }
}

if (true) {
    module.exports = MyCanvas;
}

if (typeof window !== 'undefined') {
    window.MyCanvas = MyCanvas;
}


/***/ }),

/***/ "./src/models/Image/GrayscaleImage.model.js":
/*!**************************************************!*\
  !*** ./src/models/Image/GrayscaleImage.model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BasicImage = __webpack_require__(/*! ./RGBAImage.model */ "./src/models/Image/RGBAImage.model.js");

class GrayscaleImage extends BasicImage {
    constructor(settings = {}) {
        settings.nbChannels = 1;
        super(settings);
    }

    getImageData() {
        const converter = __webpack_require__(/*! ../../transformations/converters/GrayscaleToImageData.converter */ "./src/transformations/converters/GrayscaleToImageData.converter.js");
        return converter(this);
    }

    threshold(threshold) {
        const filter = __webpack_require__(/*! ../../transformations/filters/threshold.filter */ "./src/transformations/filters/threshold.filter.js");
        return filter(this, {
            write: true,
            threshold
        });
    }
}

module.exports = GrayscaleImage;

/***/ }),

/***/ "./src/models/Image/Image.model.js":
/*!*****************************************!*\
  !*** ./src/models/Image/Image.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class BasicImage {
    constructor(settings = {}) {
        this.mimetype = '';
        this.pixels = [];
        this.nbChannel = 4;
        this.resolution = {
            x: settings.width || 0,
            y: settings.height || 0
        }

        if (typeof settings.pixels === 'undefined') {
            this.pixels = new Uint8Array(this.resolution.x * this.resolution.y * this.nbChannel);
        }

        else {
            this.pixels = settings.pixels;
        }
    }

    getPixels() {
        return this.pixels;
    }

    getWidth() {
        return this.resolution.x;
    }

    getHeight() {
        return this.resolution.y;
    }

    getNbChannel() {
        return this.nbChannel;
    }

    getImageData() {
        throw new Error('Abstract method called "BasicImage::getImageData". Please overwrite in sub-class');
    }

    clone() {
        const factory = this.constructor;
        return new factory({
            width: this.getWidth(),
            height: this.getWidth()
        });
    }

    render(context) {
        const imageData = this.getImageData();
        console.log(imageData);
        context.putImageData(imageData, 0, 0);
    }
}

module.exports = BasicImage;

/***/ }),

/***/ "./src/models/Image/RGBAImage.model.js":
/*!*********************************************!*\
  !*** ./src/models/Image/RGBAImage.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BasicImage = __webpack_require__(/*! ./Image.model */ "./src/models/Image/Image.model.js");

class RGBAImage extends BasicImage {
    constructor(settings = {}) {
        settings.nbChannel = 4;
        super(settings);
    }

    getImageData() {
        const converter = __webpack_require__(/*! ../../transformations/converters/RGBAToImageData.converter */ "./src/transformations/converters/RGBAToImageData.converter.js");
        return converter(this);
    }
}

module.exports = RGBAImage;

/***/ }),

/***/ "./src/models/layout/viewer.model.js":
/*!*******************************************!*\
  !*** ./src/models/layout/viewer.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Viewer {
    constructor(canvas_id) {
        this.dom_elt = document.getElementById(canvas_id);
        this.context = this.dom_elt.getContext('2d');
        this.image = null;
        this.imageElt = null;
    }

    setSize(width, height) {
        console.log('set size', width, height);
        // resolution
        this.dom_elt.width = width;
        this.dom_elt.height = height;

        // physical pixels
        this.dom_elt.style.width = width  + 'px';
        this.dom_elt.style.height = height + 'px';
    }

    clear() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.dom_elt.width, this.dom_elt.height);
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
        this.drawImage(image);
        // this.setSize(image.getWidth(), image.getHeight());
        // image.render(this.context);
    }

    reset() {
        this.render(this.context);
    }

    drawImage(image) {
        console.log('draw image', image)
        // this.context.drawImage(image, 0, 0);
        this.setSize(image.getWidth(), image.getHeight());
        image.render(this.context);
    }
}

window.Viewer = Viewer;

module.exports = Viewer;

/***/ }),

/***/ "./src/transformations/OCR/tesseract.ocr.js":
/*!**************************************************!*\
  !*** ./src/transformations/OCR/tesseract.ocr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Tesseract = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");

module.exports = function(image) {
    console.log('begin works...');
    // Tesseract.recognize(image).then(result => {
    //     console.log('end !', result)
    // });

    Tesseract.recognize(image, {
        // lang: 'fra'
    })
    .progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError))
}

/***/ }),

/***/ "./src/transformations/converters/GrayscaleToImageData.converter.js":
/*!**************************************************************************!*\
  !*** ./src/transformations/converters/GrayscaleToImageData.converter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(grayscaleImage) {
    const context = document.createElement('canvas').getContext('2d');
    const imageData = context.createImageData(
        grayscaleImage.getWidth(),
        grayscaleImage.getHeight()
    );

    const input_pixels = grayscaleImage.getPixels();
    const output_pixels = imageData.data;
    
    for (let i = 0; i < input_pixels.length; i++) {
        output_pixels[i * 4] = input_pixels[i];
        output_pixels[i * 4 + 1] = input_pixels[i];
        output_pixels[i * 4 + 2] = input_pixels[i];
        output_pixels[i * 4 + 3] = 255;
    }

    return imageData;
};

/***/ }),

/***/ "./src/transformations/converters/RGBAToGrayscale.converter.js":
/*!*********************************************************************!*\
  !*** ./src/transformations/converters/RGBAToGrayscale.converter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const GrayscaleImage = __webpack_require__(/*! ../../models/Image/GrayscaleImage.model */ "./src/models/Image/GrayscaleImage.model.js");

module.exports = function(RGBAImage) {
    const input_pixels = RGBAImage.getPixels(); 
    const grayscale = new GrayscaleImage({
        width: RGBAImage.getWidth(),
        height: RGBAImage.getHeight()
    });

    const output_pixels = grayscale.getPixels();

    for(let i = 0; i < input_pixels.length; i += 4) {
        const intensity = Math.ceil((
            0.30 * input_pixels[i] + 
            0.59 * input_pixels[i + 1] + 
            0.11 * input_pixels[i + 2]
        ) * (input_pixels[i + 4] / 255.0)); 
        

        output_pixels[i / 4] = intensity;
    }

    console.log('ouput ndg', output_pixels)

    return grayscale;
};

/***/ }),

/***/ "./src/transformations/converters/RGBAToImageData.converter.js":
/*!*********************************************************************!*\
  !*** ./src/transformations/converters/RGBAToImageData.converter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(basicImage) {
    const context = document.createElement('canvas').getContext('2d');
    const imageData = context.createImageData(
        basicImage.getWidth(),
        basicImage.getHeight()
    );

    const input_pixels = basicImage.getPixels();
    const output_pixels = imageData.data;
    
    console.log(input_pixels,input_pixels.length)
    for (let i = 0; i < input_pixels.length; i++) {
        output_pixels[i] = Math.min(Math.max(0, input_pixels[i]), 255);
    }

    return imageData;
};

/***/ }),

/***/ "./src/transformations/filters/threshold.filter.js":
/*!*********************************************************!*\
  !*** ./src/transformations/filters/threshold.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(image, options = {}) {
    console.log(image, image.getPixels());
    const pixels = image.getPixels(); 

    const threshold = Number.isFinite(options) ? options : options.threshold;
    const output = options.write === true ? image : image.clone();
    const outputPixels = output.getPixels();


    console.log('tr', threshold);

    for(let i = 0; i < pixels.length; ++i) {
        const intensity = (pixels[i] >= threshold) ? 255 : 0; 

        outputPixels[i] = intensity;
        // outputPixels[i + 1] = intensity;
        // outputPixels[i + 2] = intensity;
        // outputPixels[i + 3] = 255;

    }

    return output;
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map