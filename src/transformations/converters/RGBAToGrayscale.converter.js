const GrayscaleImage = require('../../models/Image/GrayscaleImage.model');

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