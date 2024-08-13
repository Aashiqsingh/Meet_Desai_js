const submitHandler = async(e)=>{
    e.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var isActive = document.getElementsByName("status")

    console.log(name.value);
    


    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name:name.value,
            email:email.value,
            age:age.value,
            isActive:isActive[0].checked ? true : false,
        })
    })

    const res = await response.json();
    console.log(res.data);

    console.log("Data added successfully..");
    
    
}