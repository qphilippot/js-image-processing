class Viewer {
    constructor(canvas_id) {
        this.dom_elt = document.getElementById(canvas_id);
        this.context = this.dom_elt.getContext('2d');
        this.image = null;
        this.imageElt = null;
    }

    setSize(width, height) {
        console.log('set size', width, height);
        // resolution
        this.dom_elt.width = width;
        this.dom_elt.height = height;

        // physical pixels
        this.dom_elt.style.width = width  + 'px';
        this.dom_elt.style.height = height + 'px';
    }

    clear() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.dom_elt.width, this.dom_elt.height);
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
        this.drawImage(image);
        // this.setSize(image.getWidth(), image.getHeight());
        // image.render(this.context);
    }

    reset() {
        this.render(this.context);
    }

    drawImage(image) {
        console.log('draw image', image)
        // this.context.drawImage(image, 0, 0);
        this.setSize(image.getWidth(), image.getHeight());
        image.render(this.context);
    }
}

window.Viewer = Viewer;

module.exports = Viewer;