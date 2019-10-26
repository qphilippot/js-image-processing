class MyCanvas {
    constructor(canvas_id) {
        this.dom_elt = document.getElementById(canvas_id);
        this.context = this.dom_elt.getContext('2d');
        this.image = null;
        this.imageElt = null;
    }

    setSize(width, height) {
        this.width = width;
        //this.context.width = width;
        this.dom_elt.width = width;
        this.dom_elt.style.width = width  + 'px';

        this.height = height;
        // this.context.height = height;
        this.dom_elt.height = height;
        this.dom_elt.style.height = height + 'px';
    }

    clear() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.width, this.height);
    }

    openImage(blob) {
        const reader = new FileReader();
        reader.onload = () => {
            const image = new Image();
            image.onload = () => {
                this.setImage(image);
            };

            image.src = reader.result;
        };

        reader.readAsDataURL(blob);
    }

    loadImage(url) {
        const imageElt = new Image();
        image.crossOrigin = "";
        image.src = url;
        image.onload = () => {
            this.setImage(image);
        }
    }

    reset() {
        this.drawImageData(this.getImage());
    }

    setImage(image) {
        this.imageElt = image;
        console.log(image.width, image.height)
        this.setSize(image.width, image.height);
        this.context.drawImage(image,0,0);

        this.image = this.context.getImageData(0, 0, this.width, this.height);
    }

    drawImage(image) {
        console.log(image)
        this.context.drawImage(image, 0, 0);
    }

    sobel(image) {
        const pixels = image.data;
        const output = this.context.createImageData(image.width, image.height);

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


        const row_offset = image.width * 4;

        for (let i = 1; i < image.width - 2; i++) {
            const x_offset = i * 4;
            for (let j = 1; j < image.height - 2; j++) {
                const y_offset = j * row_offset;
                for (let k = 0; k < 3; k++) {
                    const pixel_x = 
                    (
                        x_sobel[0][0] * pixels[
                            y_offset - row_offset + 
                            x_offset - 4 +
                            k
                        ]
                    ) + (
                        x_sobel[0][1] * pixels[
                            y_offset - row_offset + 
                            x_offset +
                            k
                        ]
                    ) + (
                        x_sobel[0][2] * pixels[
                            y_offset - row_offset + 
                            x_offset + 4 +
                            k
                        ]
                    ) + (
                        x_sobel[1][0] * pixels[
                            y_offset + 
                            x_offset - 4 +
                            k
                        ]
                    ) + (
                        x_sobel[1][1] * pixels[
                            y_offset + 
                            x_offset +
                            k
                        ]
                    ) + (
                        x_sobel[1][2] * pixels[
                            y_offset + 
                            x_offset + 4 +
                            k
                        ]
                    ) + (
                        x_sobel[2][0] * pixels[
                            y_offset + row_offset + 
                            x_offset - 4 +
                            k
                        ]
                    ) + (
                        
                        x_sobel[2][1] * pixels[
                            y_offset + row_offset + 
                            x_offset +
                            k
                        ]
                    ) + (
                        x_sobel[2][2] * pixels[
                            y_offset + row_offset + 
                            x_offset + 4 +
                            k
                        ]
                    );
      
         
                    const pixel_y = 
                    (
                        y_sobel[0][0] * pixels[
                            y_offset - row_offset + 
                            x_offset - 4 +
                            k
                        ]
                    ) + (
                        y_sobel[0][1] * pixels[
                            y_offset - row_offset + 
                            x_offset +
                            k
                        ]
                    ) + (
                        y_sobel[0][2] * pixels[
                            y_offset - row_offset + 
                            x_offset + 4 +
                            k
                        ]
                    ) + (
                        y_sobel[1][0] * pixels[
                            y_offset + 
                            x_offset - 4 +
                            k
                        ]
                    ) + (
                        y_sobel[1][1] * pixels[
                            y_offset + 
                            x_offset +
                            k
                        ]
                    ) + (
                        y_sobel[1][2] * pixels[
                            y_offset + 
                            x_offset + 4 +
                            k
                        ]
                    ) + (
                        y_sobel[2][0] * pixels[
                            y_offset + row_offset + 
                            x_offset - 4 +
                            k
                        ]
                    ) + (
                        y_sobel[2][1] * pixels[
                            y_offset + row_offset + 
                            x_offset +
                            k
                        ]
                    ) + (
                        y_sobel[2][2] * pixels[
                            y_offset + row_offset + 
                            x_offset + 4 +
                            k
                        ]
                    );
                
                    const intensity = Math.ceil(Math.sqrt(
                        (pixel_x * pixel_x) + (pixel_y * pixel_y)
                    ));
          
                    output.data[y_offset + x_offset + k] = intensity;
                }

                output.data[y_offset + x_offset + 3] = 255;
            }
        }

            // todo grayscale
        return output;
    }

    getGrayscale(image) {
        const original =  image;
        const pixels = original.data; 

        const grayscale = this.context.createImageData(this.width, this.height);

        for(var i = 0; i < pixels.length; i += 4) {
            let intensity = 0.3 * pixels[i] + 0.59 * pixels[i + 1] + 0.11 * pixels[i + 2]; 
            
            if (pixels[i + 3] === 0) {
                intensity = 255;
            }

            grayscale.data[i] = intensity;
            grayscale.data[i + 1] = intensity;
            grayscale.data[i + 2] = intensity;
            grayscale.data[i + 3] = 255;

        }

        return grayscale;  
    }

    thresholding(threshold) {
        const input = this.getGrayscale(this.getImage());
        const pixels = input.data; 

        const output = this.context.createImageData(this.width, this.height);

        for(var i = 0; i < pixels.length; i += 4) {
            const intensity = (pixels[i] >= threshold) ? 255 : 0; 

            output.data[i] = intensity;
            output.data[i + 1] = intensity;
            output.data[i + 2] = intensity;
            output.data[i + 3] = 255;

        }

        return output;
    }

    drawImageData(imageData) {
        console.log('drawImageData', imageData);
        this.context.putImageData(imageData, 0, 0);
    }

    getImage() {
        return this.image;
    }

    threshold() {
        //
    }
}

if (typeof module !== 'undefined') {
    module.exports = MyCanvas;
}

if (typeof window !== 'undefined') {
    window.MyCanvas = MyCanvas;
}
