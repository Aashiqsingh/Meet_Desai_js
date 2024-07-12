var users = ["rmeet","rsagar","rah","rtejas","rbhuwan","rpukar","rroshan"]

// var flag = false
// for(let i=0;i<users.length;i++){

//     if(users[i].length > 3){

//         flag = true;
//         break;
//     }
// }
// console.log(flag);

var x = users.every((u)=>{
    return u.length > 3
})

console.log(x);


var y = users.every((u)=> u.startsWith("r"))
console.log(y);