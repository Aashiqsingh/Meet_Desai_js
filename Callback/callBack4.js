const pdfHandler = (option)=>{

    console.log(option.fname +" file handler");
}

const wordHandler = (option)=>{
    console.log("file handler: " + option.fname);
}

const pngHandler = (option)=>{
    console.log(option.fname + " file handler");
    
}


const Handler = (file , cb)=>{

    cb({fname:file,size:"2000kb"})
}

var file = "abc.png";

if(file.endsWith(".pdf")){
    Handler(file,pdfHandler)
}
else if(file.endsWith(".word")){
    Handler(file,wordHandler)
}
else if(file.endsWith(".png")){
    Handler(file,pngHandler)
}