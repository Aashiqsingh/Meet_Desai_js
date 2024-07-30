var images = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"]

var CurrentIndex = 0;

var prev = document.getElementById("prev");
prev.addEventListener("click",()=>{

                    //  (0-1+5)%5
                    // 2-1 + 5 % 5
    CurrentIndex = (CurrentIndex - 1 + images.length)%images.length;
    var image = document.getElementById("image");
    image.src = "../Images/"+images[CurrentIndex]
})

var next = document.getElementById("next");
next.addEventListener("click",()=>{

    CurrentIndex = (CurrentIndex+1)%images.length;
    var image = document.getElementById("image");
    image.src = "../Images/"+images[CurrentIndex]
})