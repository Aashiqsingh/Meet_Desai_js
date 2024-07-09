const pdfHandler = (option) => {

    return option.fname + " handler"
}

const wordHandler = (option) => {
    return option.fname + " handler"
}

const pngHandler = (option) => {
    return option.fname + " handler"

}


// const Handler = (file, cb) => {

//     return cb({fname:file,size:"2000kb"})
// }

const Handler = (file , cb)=> cb({fname:file,size:"2000kb"})

var file = "abc.pdf";
var x;


if (file.endsWith(".pdf")) {
    x = Handler(file, pdfHandler)
}
else if (file.endsWith(".word")) {
    x = Handler(file, wordHandler)
}
else if (file.endsWith(".png")) {
    x = Handler(file, pngHandler)
}

console.log(x);