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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.Viewer = __webpack_require__(/*! ./models/layout/viewer.model */ "./src/models/layout/viewer.model.js");
window.RGBAImage = __webpack_require__(/*! ./models/Image/RGBAImage.model */ "./src/models/Image/RGBAImage.model.js");
window.Transformations = {
    RGBAToGrayscale: __webpack_require__(/*! ./transformations/converters/RGBAToGrayscale.converter */ "./src/transformations/converters/RGBAToGrayscale.converter.js")
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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map