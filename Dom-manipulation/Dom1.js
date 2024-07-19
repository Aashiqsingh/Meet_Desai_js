// var x = document.getElementById("ans").innerHTML
// console.log(x);

// var x = document.getElementById("ans")
// console.log(x.innerHTML);

// x.style.backgroundColor = "red"

function changeText() {

    var x = document.getElementById("ans")
    x.innerHTML = "Hello world"
    console.log(x);
    x.style.backgroundColor = "blue"
    x.style.color = "white"

}

function changeClr() {
    var x = document.getElementById("anchor")

    x.innerHTML = "Google"
    x.href = "https://www.google.com"
    x.className = "box";
    console.log(x);

}

function changeHref() {
    var x = document.getElementById("output")
    console.log(x);
    x.href = "https://flipkart.com"
    x.innerHTML = "flipkart"
}

function youtube(){
    var x = document.getElementById("output")
    x.innerHTML = "youtube"
    x.href = "https://www.youtube.com"
}