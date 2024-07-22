function text(){

    const input = document.getElementById("input")
    const para = document.getElementById("para")

    console.log(input);

    // para.innerHTML = input.value

    if(input.value.length < 3){
        // alert("Please fill out")
        para.innerHTML = "Please fill out at least 3 characters"
        input.style.outline = "2px solid red"
    }
    else{
        para.innerHTML = ""
        input.style.outline = "2px solid green"
    }
}