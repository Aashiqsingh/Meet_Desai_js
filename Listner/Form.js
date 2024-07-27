const studentForm = document.getElementById('studentForm');
studentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("Form submitted..");
})

const studentname = document.getElementsByName("name")[0]
studentname.addEventListener("input",(e)=>{

    console.log(e.target.value);
})


var emails = [
    "meet@gmail.com",
    "aashiq@gmail.com",
    "smarty@gmail.com"
]

const email = document.getElementsByName("email")[0]
email.addEventListener("blur",(e)=>{

    // console.log(e);
    // if(e.target.value.length < 5)
    // {
    //     console.log("your email is too short");
    // }
    if(e.target.value.length <= 0){
        console.log("Please enter your email");
    }
    else if(emails.includes(e.target.value)){
        console.log("Email already exists");
    }
    else{
        console.log("Email is valid");
    }
})