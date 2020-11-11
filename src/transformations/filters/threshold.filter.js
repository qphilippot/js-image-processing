module.exports = function(image, options = {}) {
    console.log(image, image.getPixels());
    const pixels = image.getPixels(); 

    const threshold = Number.isFinite(options) ? options : options.threshold;
    const output = options.write === true ? image : image.clone();
    const outputPixels = output.getPixels();


    console.log('tr', threshold);

    for(let i = 0; i < pixels.length; ++i) {
        const intensity = (pixels[i] >= threshold) ? 255 : 0; 

        outputPixels[i] = intensity;
        // outputPixels[i + 1] = intensity;
        // outputPixels[i + 2] = intensity;
        // outputPixels[i + 3] = 255;

    }

    return output;
}