var users = ["meet","sagar","rahul","tejas","bhuwan","pukar","roshan"]


// filter -- it will return new array with modified data 

// users = users.filter((user)=>{

//     return user.length > 5
// })
// console.log(users);

var deleteuser = "rahul";

users = users.filter((user)=>{

    // meet
    // rahul 
    return user != deleteuser;
})

console.log(users);