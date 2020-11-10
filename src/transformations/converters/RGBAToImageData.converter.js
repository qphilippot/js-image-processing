function convert (basicImage) {
    const context = document.createElement('canvas').getContext('2d');
    const imageData = context.createImageData(
        basicImage.getWidth(),
        basicImage.getHeight()
    );

    const input_pixels = basicImage.getPixels();
    const output_pixels = imageData.data;

    for (let i = 0; i < input_pixels.length; i++) {
        output_pixels[i] = Math.min(Math.max(0, input_pixels[i]), 255);
    }

    return imageData;
}

export default convert;