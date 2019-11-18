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

    threshold(threshold) {
        const filter = require('../../transformations/filters/threshold.filter');
        return filter(this, {
            write: true,
            threshold
        });
    }
}

module.exports = GrayscaleImage;