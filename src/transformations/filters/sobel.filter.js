const x_sobel = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
];


const y_sobel = [
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1]
];


module.exports = function(image) {
    const input_pixels = image.getPixels();

    
    const output = image.clone();
    const output_pixels = output.getPixels();
    
    // image dimensions
    const width = output.getWidth();
    const height = output.getWidth();
    const nbChannels = output.getWidth();



    const row_offset = width * nbChannels;

    for (let i = 1; i < width - 2; i++) {
        const x_offset = i * nbChannels;
        for (let j = 1; j < height - 2; j++) {
            const y_offset = j * row_offset;
            for (let k = 0; k < 3; k++) {
                const pixel_x = 
                (
                    x_sobel[0][0] * input_pixels[
                        y_offset - row_offset + 
                        x_offset - nbChannels +
                        k
                    ]
                ) + (
                    x_sobel[0][1] * input_pixels[
                        y_offset - row_offset + 
                        x_offset +
                        k
                    ]
                ) + (
                    x_sobel[0][2] * input_pixels[
                        y_offset - row_offset + 
                        x_offset + nbChannels +
                        k
                    ]
                ) + (
                    x_sobel[1][0] * input_pixels[
                        y_offset + 
                        x_offset - nbChannels +
                        k
                    ]
                ) + (
                    x_sobel[1][1] * input_pixels[
                        y_offset + 
                        x_offset +
                        k
                    ]
                ) + (
                    x_sobel[1][2] * input_pixels[
                        y_offset + 
                        x_offset + nbChannels +
                        k
                    ]
                ) + (
                    x_sobel[2][0] * input_pixels[
                        y_offset + row_offset + 
                        x_offset - nbChannels +
                        k
                    ]
                ) + (
                    
                    x_sobel[2][1] * input_pixels[
                        y_offset + row_offset + 
                        x_offset +
                        k
                    ]
                ) + (
                    x_sobel[2][2] * input_pixels[
                        y_offset + row_offset + 
                        x_offset + nbChannels +
                        k
                    ]
                );
  
     
                const pixel_y = 
                (
                    y_sobel[0][0] * input_pixels[
                        y_offset - row_offset + 
                        x_offset - nbChannels +
                        k
                    ]
                ) + (
                    y_sobel[0][1] * input_pixels[
                        y_offset - row_offset + 
                        x_offset +
                        k
                    ]
                ) + (
                    y_sobel[0][2] * input_pixels[
                        y_offset - row_offset + 
                        x_offset + nbChannels +
                        k
                    ]
                ) + (
                    y_sobel[1][0] * input_pixels[
                        y_offset + 
                        x_offset - nbChannels +
                        k
                    ]
                ) + (
                    y_sobel[1][1] * input_pixels[
                        y_offset + 
                        x_offset +
                        k
                    ]
                ) + (
                    y_sobel[1][2] * input_pixels[
                        y_offset + 
                        x_offset + nbChannels +
                        k
                    ]
                ) + (
                    y_sobel[2][0] * input_pixels[
                        y_offset + row_offset + 
                        x_offset - nbChannels +
                        k
                    ]
                ) + (
                    y_sobel[2][1] * input_pixels[
                        y_offset + row_offset + 
                        x_offset +
                        k
                    ]
                ) + (
                    y_sobel[2][2] * input_pixels[
                        y_offset + row_offset + 
                        x_offset + nbChannels +
                        k
                    ]
                );
            
                const intensity = Math.ceil(Math.sqrt(
                    (pixel_x * pixel_x) + (pixel_y * pixel_y)
                ));
      
                output_pixels[y_offset + x_offset + k] = intensity;
            }

            return output_pixels;
            //output.data[y_offset + x_offset + 3] = 255;
        }
    }
};