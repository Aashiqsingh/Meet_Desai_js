// function GetData(){


//     var mydiv = document.getElementById("mydiv");

//     var h1 = document.createElement("h1")
//     h1.innerHTML = "Hello"
//     h1.style.backgroundColor = "red"
//     h1.style.color = "white"

//     mydiv.appendChild(h1)

// }

// GetData()

function getForm(){

    var mydiv = document.getElementById("mydiv");

    var form = document.createElement("form")
    var nameLable = document.createElement("lable")
    nameLable.innerHTML = "Name"
    var nameInput = document.createElement("input")
    nameInput.setAttribute("type","text")
    nameInput.placeholder = "Enter Name"
    var nameSpan = document.createElement("span")
    var emailLable = document.createElement("lable")
    emailLable.innerHTML = "Email"
    var emailInput = document.createElement("input")
    emailInput.setAttribute("type","email")
    emailInput.placeholder = "Enter Email"
    var emailSpan = document.createElement("span")

    var netflixanchor = document.createElement("a")
    netflixanchor.innerHTML = "Netflix"
    netflixanchor.href = "https://www.netflix.com"
    netflixanchor.setAttribute("target","_blank")
    var submitBtn = document.createElement("button")
    submitBtn.innerHTML = "Submit"
    submitBtn.addEventListener("click",(event)=>{
        event.preventDefault() // to prevent form submission
        var name = nameInput.value
        var email = emailInput.value

        // console.log("name = ",name);
        // console.log("email = ",email);

        nameSpan.innerHTML = name;
        emailSpan.innerHTML = email;
    })



    mydiv.appendChild(form)
    form.appendChild(nameLable)
    form.appendChild(nameInput)
    form.appendChild(nameSpan)
    form.appendChild(document.createElement("br"))
    form.appendChild(emailLable)
    form.appendChild(emailInput)
    form.appendChild(emailSpan)
    form.appendChild(document.createElement("br"))
    form.appendChild(submitBtn)
    form.appendChild(document.createElement("br"))
    form.appendChild(netflixanchor)
}