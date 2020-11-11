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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_layout_viewer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/layout/viewer.model */ "./src/models/layout/viewer.model.js");
/* harmony import */ var _models_Image_RGBAImage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Image/RGBAImage.model */ "./src/models/Image/RGBAImage.model.js");
/* harmony import */ var _transformations_converters_RGBAToGrayscale_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformations/converters/RGBAToGrayscale.converter */ "./src/transformations/converters/RGBAToGrayscale.converter.js");





window.Viewer = _models_layout_viewer_model__WEBPACK_IMPORTED_MODULE_0__["default"];
window.RGBAImage = _models_Image_RGBAImage_model__WEBPACK_IMPORTED_MODULE_1__["default"];
window.Transformations = {
    RGBAToGrayscale: _transformations_converters_RGBAToGrayscale_converter__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        this.setSize(image.width, image.height);
        this.context.drawImage(image,0,0);

        this.image = this.context.getImageData(0, 0, this.width, this.height);
    }

    drawImage(image) {
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
        this.context.putImageData(imageData, 0, 0);
    }

    getImage() {
        return this.image;
    }

    threshold() {
        //
    }
}


if (typeof window !== 'undefined') {
    window.MyCanvas = MyCanvas;
}


/***/ }),

/***/ "./src/models/Image/GrayscaleImage.model.js":
/*!**************************************************!*\
  !*** ./src/models/Image/GrayscaleImage.model.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RGBAImage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGBAImage.model */ "./src/models/Image/RGBAImage.model.js");
/* harmony import */ var _transformations_converters_GrayscaleToImageData_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transformations/converters/GrayscaleToImageData.converter */ "./src/transformations/converters/GrayscaleToImageData.converter.js");



class GrayscaleImage extends _RGBAImage_model__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}) {
        settings.nbChannels = 1;
        super(settings);
    }

    getImageData() {
        return Object(_transformations_converters_GrayscaleToImageData_converter__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
    }

    threshold(threshold) {
        // const filter = require('../../transformations/filters/threshold.filter');
        return filter(this, {
            write: true,
            threshold
        });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GrayscaleImage);

/***/ }),

/***/ "./src/models/Image/Image.model.js":
/*!*****************************************!*\
  !*** ./src/models/Image/Image.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BasicImage {
    constructor(settings = {}) {
        this.mimetype = '';
        this.pixels = [];
        this.nbChannel = settings.nbChannels || 4;
        this.resolution = {
            x: settings.width || 0,
            y: settings.height || 0
        }

        if (typeof settings.pixels === 'undefined') {
            this.pixels = new Uint8Array(this.resolution.x * this.resolution.y * this.nbChannel);
        }

        else {
            this.pixels = settings.pixels;

            if (this.resolution.x * this.resolution.y * this.nbChannel !== this.pixels.length) {
                console.error(this.resolution.x * this.resolution.y * this.nbChannel, '!=', this.pixels.length, this);
            }
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
        context.putImageData(imageData, 0, 0);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (BasicImage);

/***/ }),

/***/ "./src/models/Image/RGBAImage.model.js":
/*!*********************************************!*\
  !*** ./src/models/Image/RGBAImage.model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.model */ "./src/models/Image/Image.model.js");
/* harmony import */ var _transformations_converters_RGBAToImageData_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transformations/converters/RGBAToImageData.converter */ "./src/transformations/converters/RGBAToImageData.converter.js");



class RGBAImage extends _Image_model__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}) {
        settings.nbChannel = 4;
        super(settings);
    }

    getImageData() {
        return Object(_transformations_converters_RGBAToImageData_converter__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (RGBAImage);

/***/ }),

/***/ "./src/models/layout/viewer.model.js":
/*!*******************************************!*\
  !*** ./src/models/layout/viewer.model.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Viewer {
    constructor(canvas_id) {
        this.dom_elt = document.getElementById(canvas_id);
        this.context = this.dom_elt.getContext('2d');
        this.image = null;
        this.imageElt = null;
    }

    setSize(width, height) {
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
        // this.context.drawImage(image, 0, 0);
        this.setSize(image.getWidth(), image.getHeight());
        image.render(this.context);
    }
}

window.Viewer = Viewer;

/* harmony default export */ __webpack_exports__["default"] = (Viewer);

/***/ }),

/***/ "./src/transformations/converters/ChannelReducer.js":
/*!**********************************************************!*\
  !*** ./src/transformations/converters/ChannelReducer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {Uint8Array} buffer 
 * @param {Number} nbChannel 
 * @param {Number[]} channelToRemoveIndexArray 
 */
function channelReducer(buffer, nbChannels, channelToRemoveIndexArray) {
    const newBufferSize = (buffer.length / nbChannels) * (nbChannels - channelToRemoveIndexArray.length);
    const newBuffer = new Uint8Array(newBufferSize);

    const channelWillBeRemoved = new Array(nbChannels);
    for (let channelIndex = 0; channelIndex < nbChannels; channelIndex++) {
        channelWillBeRemoved[channelIndex] = (
            channelToRemoveIndexArray.indexOf(channelIndex) >= 0
        );
    }

    let offset = 0;
    for (let i = 0; i < buffer.length; i += nbChannels) {
        for (let j = 0; j < nbChannels; j++) {
            if (channelWillBeRemoved[j] !== true) {
                newBuffer[offset] = buffer[i + j]; 
                offset++;
            }
        }
    }

    return newBuffer;
}

/* harmony default export */ __webpack_exports__["default"] = (channelReducer);

/***/ }),

/***/ "./src/transformations/converters/GrayscaleToImageData.converter.js":
/*!**************************************************************************!*\
  !*** ./src/transformations/converters/GrayscaleToImageData.converter.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function convert(grayscaleImage) {
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
}

/* harmony default export */ __webpack_exports__["default"] = (convert);


/***/ }),

/***/ "./src/transformations/converters/RGBAToGrayscale.converter.js":
/*!*********************************************************************!*\
  !*** ./src/transformations/converters/RGBAToGrayscale.converter.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Image_GrayscaleImage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Image/GrayscaleImage.model */ "./src/models/Image/GrayscaleImage.model.js");
/* harmony import */ var _filters_RGBToGrayscale_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filters/RGBToGrayscale.filter */ "./src/transformations/filters/RGBToGrayscale.filter.js");
/* harmony import */ var _ChannelReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChannelReducer */ "./src/transformations/converters/ChannelReducer.js");




function convert(RGBAImage) {
    const input_pixels = RGBAImage.getPixels();
    const grayscalesPixels = _filters_RGBToGrayscale_filter__WEBPACK_IMPORTED_MODULE_1__["default"].filter(input_pixels, { format: "AlphaImageData" });
    const reducedPixelsBuffer = Object(_ChannelReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(grayscalesPixels, 4, [0, 1, 2]);

    return new _models_Image_GrayscaleImage_model__WEBPACK_IMPORTED_MODULE_0__["default"]({
        width: RGBAImage.getWidth(),
        height: RGBAImage.getHeight(),
        pixels: reducedPixelsBuffer
    })
}

/* harmony default export */ __webpack_exports__["default"] = (convert);

/***/ }),

/***/ "./src/transformations/converters/RGBAToImageData.converter.js":
/*!*********************************************************************!*\
  !*** ./src/transformations/converters/RGBAToImageData.converter.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function convert (basicImage) {
    const context = document.createElement('canvas').getContext('2d');
    const imageData = context.createImageData(
        basicImage.getWidth(),
        basicImage.getHeight()
    );

    const input_pixels = basicImage.getPixels();
    const output_pixels = imageData.data;

    for (let i = 0; i < input_pixels.length; i++) {
        output_pixels[i] = Math.min(Math.max(0, input_pixels[i]), 255);
    }

    return imageData;
}

/* harmony default export */ __webpack_exports__["default"] = (convert);

/***/ }),

/***/ "./src/transformations/filters/RGBToGrayscale.filter.js":
/*!**************************************************************!*\
  !*** ./src/transformations/filters/RGBToGrayscale.filter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 /**
  * 
  * @param {Uint8Array} buffer 
  * @param {Number} offset 
  */
 function applyToPixel(buffer, offset) {
    return Math.ceil((
        0.30 * buffer[offset] + 
        0.59 * buffer[offset + 1] + 
        0.11 * buffer[offset + 2]
    ) * (buffer[offset + 4] / 255.0)); 
 }


 
 /**
  * @param {Uint8Array} pixels
  * @return {Uint8Array} 
  */
 function rgbTograyscale(input_pixels, settings = {}) {
    let output_pixels;
    let writePixel;

    if (settings.format === "AlphaImageData") {
        output_pixels = new Uint8Array(input_pixels.length);
        writePixel = (pixelOffset, intensity) => {
            output_pixels[pixelOffset] = 255;
            output_pixels[pixelOffset + 1] = 255;
            output_pixels[pixelOffset + 2] = 255;
            output_pixels[pixelOffset + 3] = intensity
        };
    }

    else {
        output_pixels = new Uint8Array(input_pixels.length / 4);
        writePixel = (pixelOffset, intensity) => {
            output_pixels[pixelOffset] = intensity;
        };
    }
   
    for (let i = 0; i < input_pixels.length; i += 4) {
        const intensity = applyToPixel(input_pixels, i);
        writePixel(i, intensity);
    }

    return output_pixels;
}

/* harmony default export */ __webpack_exports__["default"] = ({
    filter: rgbTograyscale,
    applyToPixel: applyToPixel
});


/***/ })

/******/ });
//# sourceMappingURL=main.js.map