const Tesseract = require('tesseract.js');

// var gray = Transformations.RGBAToGrayscale(viewer.getImage())
// window.Transformations.OCR(viewer.getImage().threshold(200).getImageData());
module.exports = function(image) {
    console.log('begin works...');
    // Tesseract.recognize(image).then(result => {
    //     console.log('end !', result)
    // });

    Tesseract.recognize(image, {
        // lang: 'fra'
    })
    .progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError))
}