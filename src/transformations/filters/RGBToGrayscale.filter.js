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

export default {
    filter: rgbTograyscale,
    applyToPixel: applyToPixel
};
