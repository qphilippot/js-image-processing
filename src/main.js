class MyCanvas {
    constructor(canvas_id) {
        this.dom_elt = document.getElementById(canvas_id);
        this.context = this.dom_elt.getContext('2d');
        this.image = null;
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
        const image = new Image();
        image.crossOrigin = "";
        image.src = url;
        image.onload = () => {
            this.setImage(image);
        }
    }

    setImage(image) {
        this.image = image;
        console.log(image.width, image.height)
        this.setSize(image.width, image.height);
        this.context.drawImage(image,0,0);
    }

    drawImage(image) {
        console.log(image)
        this.context.drawImage(image, 0, 0);
    }

    getGrayscale(image) {
        const original =  this.context.getImageData(0, 0, this.width, this.height);
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
