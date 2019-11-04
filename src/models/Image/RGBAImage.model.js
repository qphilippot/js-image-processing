const BasicImage = require('./Image.model');

class RGBAImage extends BasicImage {
    constructor(settings = {}) {
        settings.nbChannel = 4;
        super(settings);
    }

    getImageData() {
        const converter = require('../../transformations/converters/RGBAToImageData.converter');
        return converter(this);
    }
}

module.exports = RGBAImage;