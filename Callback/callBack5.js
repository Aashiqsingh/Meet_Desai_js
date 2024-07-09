const pdfHandler = (option) => {

    return option.fname + " handler"
}

const wordHandler = (option) => {
    return option.fname + " handler"
}

const pngHandler = (option) => {
    return option.fname + " handler"

}


const Handler = (file, cb) => {

    var x = cb({ fname: file, size: "2000kb" })
    console.log(x);
}

var file = "abc.png";

if (file.endsWith(".pdf")) {
    Handler(file, pdfHandler)
}
else if (file.endsWith(".word")) {
    Handler(file, wordHandler)
}
else if (file.endsWith(".png")) {
    Handler(file, pngHandler)
}