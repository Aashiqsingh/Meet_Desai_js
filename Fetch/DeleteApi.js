const deleteUser = async ()=>{

    const response = await fetch("https://node5.onrender.com/user/user/66a674f136cd622cb0859bb7",{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // const res = await response.json()
    // console.log(res);
    // if(response.ok){
    //     console.log("User deleted successfully")
    // } else {
    //     console.log("Failed to delete user")
    // }
    console.log(response);
    
    
}

deleteUser()