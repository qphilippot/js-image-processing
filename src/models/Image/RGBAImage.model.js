import BasicImage from './Image.model';
import RGBAToImageDataConverter from '../../transformations/converters/RGBAToImageData.converter';

class RGBAImage extends BasicImage {
    constructor(settings = {}) {
        settings.nbChannel = 4;
        super(settings);
    }

    getImageData() {
        return RGBAToImageDataConverter(this);
    }
}

export default RGBAImage;