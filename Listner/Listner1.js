// document.getElementById("btn").addEventListener("click",()=>{
//     alert("button clicked..")
// })

var btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    alert("button clicked")
})
btn.addEventListener("mouseover",()=>{

    btn.style.backgroundColor = "red";
})


var div = document.getElementsByClassName("box")
console.log(div);

div[0].addEventListener("mouseenter",()=>{

    div[0].style.backgroundColor = "orange"
})

div[0].addEventListener("mouseleave",()=>{
    div[1].innerHTML = "<h1>Welcome</h1>"
})


var color = ["violet","indigo","blue","green","yellow","orange"]
var circle = document.getElementsByName("circle")[0]
circle.addEventListener("mousemove",()=>{


    var random = Math.floor(Math.random() * color.length)

    for(let i=0;i<=div.length;i++){
        div[i].style.backgroundColor = color[random]
    }
})