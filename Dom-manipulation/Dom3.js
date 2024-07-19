function zoomin(){

    var image = document.getElementById("image");
    image.style.height = "100px"
    image.style.width = "100px"
}


// var a = 1;
// function move(){

//     var myDiv = document.getElementById("myDiv");

//     // console.log("mouse over called");
//     // console.log(a++);
// }
var colors = ["black","orange","yellow","green","red","violet","indigo","blue"]
function move(){

    var myDiv = document.getElementById("myDiv")

    var random = Math.floor(Math.random()* colors.length)
    console.log(random);

    myDiv.style.backgroundColor = colors[random]

}