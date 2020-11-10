import Viewer from './models/layout/viewer.model';
import RGBAImage from './models/Image/RGBAImage.model';
import RGBAToGrayscale from './transformations/converters/RGBAToGrayscale.converter';


window.Viewer = Viewer;
window.RGBAImage = RGBAImage;
window.Transformations = {
    RGBAToGrayscale: RGBAToGrayscale
};

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
        this.setSize(image.width, image.height);
        this.context.drawImage(image,0,0);

        this.image = this.context.getImageData(0, 0, this.width, this.height);
    }

    drawImage(image) {
        this.context.drawImage(image, 0, 0);
    }

    sobel(image) {
        

            // todo grayscale
        return output;
    }

    getGrayscale(image) {
          
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
        this.context.putImageData(imageData, 0, 0);
    }

    getImage() {
        return this.image;
    }

    threshold() {
        //
    }
}


if (typeof window !== 'undefined') {
    window.MyCanvas = MyCanvas;
}
