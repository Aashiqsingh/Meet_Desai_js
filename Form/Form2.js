const submitHandler = (e)=>{

    e.preventDefault();


    var answer = document.getElementById('answer');
    var name = document.getElementById("name")
    var gender = document.getElementsByName("gender")
    var age = document.getElementById("age")

    var gen = ""

    if(gender[0].checked === true)
    {
        gen = "Male"
    }
    else if(gender[1].checked === true){
        gen = "Female"
    }
    else if(gender[2].checked === true){
        gen = "Other"
    }

    console.log("Name : ",name.value);
    console.log("Gender : ",gen);
    
    if(gen === "Male"){
        if(age.value > 18){
            console.log("your r eligible for vote");
        }
        else{
            console.log("you are not eligible for vote");
        }
    }
    else if(gen === "Female"){
        if(age.value > 21){
            console.log("your r eligible for vote");
        }
        else{
            console.log("you are not eligible for vote");
        }
    }
    else if(gen === "Other"){
        if(age.value > 25){
            console.log("your r eligible for vote");
        }
        else{
            console.log("you are not eligible for vote");
        }
    }

    answer.innerHTML = "Name " + name.value + "<br> Gender : " + gen 

}