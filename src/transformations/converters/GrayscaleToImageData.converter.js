function convert(grayscaleImage) {
    const context = document.createElement('canvas').getContext('2d');
    const imageData = context.createImageData(
        grayscaleImage.getWidth(),
        grayscaleImage.getHeight()
    );

    const input_pixels = grayscaleImage.getPixels();
    const output_pixels = imageData.data;
    
    for (let i = 0; i < input_pixels.length; i++) {
        output_pixels[i * 4] = input_pixels[i];
        output_pixels[i * 4 + 1] = input_pixels[i];
        output_pixels[i * 4 + 2] = input_pixels[i];
        output_pixels[i * 4 + 3] = 255;
    }

    return imageData;
}

export default convert;
