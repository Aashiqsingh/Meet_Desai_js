var users = ["meet","sagar","rahul ","tejas","bhuwan","pukar","roshan"]

// var flag = false;
// for(let i=0;i<users.length;i++){

//     if(users[i].length > 6){

//         flag = true;
//         break;
//     }
// }

// console.log(flag);

var x = users.some((user)=>{

    return user.length > 6 
})

console.log(x);

var y = users.some((user)=> user.endsWith("s"))
console.log(y);