 /**
  * @param {Uint8Array} pixels
  * @return {Uint8Array} 
  */
 function rgbTograyscale(input_pixels) {
    const output_pixels = new Uint8Array(input_pixels.length);

    for (let i = 0; i < input_pixels.length; i += 4) {
        const intensity = Math.ceil((
            0.30 * input_pixels[i] + 
            0.59 * input_pixels[i + 1] + 
            0.11 * input_pixels[i + 2]
        ) * (input_pixels[i + 4] / 255.0)); 
        

        output_pixels[i] = 255;
        output_pixels[i + 1] = 255;
        output_pixels[i + 2] = 255;
        output_pixels[i + 3] = intensity;
    }

    return output_pixels;
}

export default rgbTograyscale;
