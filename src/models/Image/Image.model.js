class BasicImage {
    constructor(settings = {}) {
        this.mimetype = '';
        this.pixels = [];
        this.nbChannel = 4;
        this.resolution = {
            x: settings.width || 0,
            y: settings.height || 0
        }

        if (typeof settings.pixels === 'undefined') {
            this.pixels = new Uint8Array(this.resolution.x * this.resolution.y * this.nbChannel);
        }

        else {
            this.pixels = settings.pixels;
        }
    }

    getPixels() {
        return this.pixels;
    }

    getWidth() {
        return this.resolution.x;
    }

    getHeight() {
        return this.resolution.y;
    }

    getNbChannel() {
        return this.nbChannel;
    }

    getImageData() {
        throw new Error('Abstract method called "BasicImage::getImageData". Please overwrite in sub-class');
    }

    clone() {
        const factory = this.constructor;
        return new factory({
            width: this.getWidth(),
            height: this.getWidth()
        });
    }

    render(context) {
        const imageData = this.getImageData();
        console.log(imageData);
        context.putImageData(imageData, 0, 0);
    }
}

module.exports = BasicImage;