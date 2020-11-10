import GrayscaleImage from '../../models/Image/GrayscaleImage.model';
import RGBAToGrayscaleFilter from '../filters/RGBToGrayscale.filter';
import ChannelReducer from './ChannelReducer';

function convert(RGBAImage) {
    const input_pixels = RGBAImage.getPixels();
    const grayscalesPixels = RGBAToGrayscaleFilter(input_pixels);
    const reducedPixelsBuffer = ChannelReducer(grayscalesPixels, 4, [0, 1, 2]);

    return new GrayscaleImage({
        width: RGBAImage.getWidth(),
        height: RGBAImage.getHeight(),
        pixels: reducedPixelsBuffer
    })
}

export default convert;