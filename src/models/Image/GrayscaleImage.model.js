const BasicImage = require('./RGBAImage.model');

class GrayscaleImage extends BasicImage {
    constructor(settings = {}) {
        settings.nbChannels = 1;
        super(settings);
    }

    getImageData() {
        const converter = require('../../transformations/converters/GrayscaleToImageData.converter');
        return converter(this);
    }
}

module.exports = GrayscaleImage;