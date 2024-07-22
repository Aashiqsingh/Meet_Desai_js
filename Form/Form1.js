function submitHandler(event) {
    event.preventDefault();  // action 

    // alert("form submission");
    console.log("form submission");

    const output = document.getElementById("output");
    const name = document.getElementById("name")
    const email = document.getElementById("email")

    // console.log(name.value);
    // console.log(email.value);

    // output.innerHTML = name.value + " " + email.value

    const user = {
        name: name.value,
        email: email.value
    }

    // console.log(user);
    // output.innerHTML = JSON.stringify(user);
    const submitErr = document.getElementById("submitErr")
    if(name.value.length == '' || email.value.length == '') {
        // alert("Please fill in all fields");
        submitErr.innerHTML = "Please fill in all fields"
        submitErr.style.color = "red"
        
    }

}

function fname(){

    const name = document.getElementById("name");
    
    const nameErr = document.getElementById("nameErr");

    if(name.value.length < 3){
        nameErr.innerHTML = "Please enter 3+ characters"
        nameErr.style.color = "red"
    }
    else if (name.value.length > 3){
        nameErr.innerHTML = ""
    }
    
}

function Email(){
    const email = document.getElementById("email");
    const emailErr = document.getElementById("emailErr");

    if(email.value != null && email.value.length < 7){
        emailErr.innerHTML = "Please enter a valid email"
        emailErr.style.color = "red"
    }
    else{
        emailErr.innerHTML = ""
        
    }
}