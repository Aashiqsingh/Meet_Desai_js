var pdfHandler = (option) => {

    return option + " handler"
}

var pdfHandler = (option,option1) => {
    return option + " handler1" + option1
}

var pdfHandler = (option,option1,option2) => {
    return option + " handler1" + option1 + "handler2" + option2

}


// const Handler = (file, cb) => {

//     return cb({fname:file,size:"2000kb"})
// }

const Handler = (file , cb)=> cb("a","b")

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