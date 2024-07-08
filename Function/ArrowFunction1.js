// function add(a,b){

//     return a+b;
// }

// var x = add(3,6)
// console.log(x);


// const demo = ()=>{
//     console.log("Arrow function called");
// }

// demo()

// const mul = (x,y)=>{
//     return x * y;
// }

// var x = mul(3,4)
// console.log(x);


// const isEven = (x)=>{

//     return x % 2 === 0;
// }

// var x = isEven(7)
// console.log(x);


// const isEven = (x)=> x % 2 === 0;
// var x = isEven(5);
// console.log(x);


// const Gretter = (a,b,c)=>{

//     return a > b ? a > c ? a : c : b > c ? b : c;
// }

const gretter = (a,b,c)=> a > b ? a > c ? a : c : b > c ? b : c;

var x = gretter(15,10,3);
console.log(x);