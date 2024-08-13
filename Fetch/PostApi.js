const postData = async()=>{


    const user = {
        name:"Meet Desai",
        email:"smarty@google.com",
        age:20,
        isAvtive: true,
    }

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },

        // body: JSON.stringify({
        //     name:"Meet Desai",
        //     email:"smarty@google.com",
        //     age:20,
        //     isAvtive: true,
        // })

        body: JSON.stringify(user)

        
    })

    const res = await response.json()
    console.log(res.data);
    
    alert("Data post successfully..")
}