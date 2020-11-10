import BasicImage from './RGBAImage.model';
import GrayscaleToImageData from '../../transformations/converters/GrayscaleToImageData.converter';

class GrayscaleImage extends BasicImage {
    constructor(settings = {}) {
        settings.nbChannels = 1;
        super(settings);
    }

    getImageData() {
        return GrayscaleToImageData(this);
    }

    threshold(threshold) {
        // const filter = require('../../transformations/filters/threshold.filter');
        return filter(this, {
            write: true,
            threshold
        });
    }
}

export default GrayscaleImage;