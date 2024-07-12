var users = ["meet","sagar","rahul","tejas","bhuwan","pukar","roshan"]


// users.forEach((user)=>{

//     console.log(user);
// })

var arry = [43,55,76,3,23,44,33]
// var sum = 0;

// arry.forEach((a)=>{
//     sum += a;
// })
// console.log(sum);



var x = arry.reduce((sum,a)=>{
    return sum + a;
},100)
console.log(x);





// map -- it will return new array with same length 


// var x = users.map((user)=>{

//     return user.toUpperCase();
    
// })

// console.log(x);