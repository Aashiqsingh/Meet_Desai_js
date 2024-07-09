// There are four types of functions
// 1. with return type without arguments
// 2. with return type with arguments
// 3. without return type with arguments
// 4. without return type without arguments


// without return type without arguments

function demo()
{
    console.log("Demo function calll");
    console.log("================================");
}
// demo()

//  without return type with arguments

function add(a,b){
 
    console.log("Addition = ",a+b);
}

// add(3,4)

// with return type without arguments

function demo2(){

    return "Demo2 function call";
}

// var x = demo2()
// console.log("Extra msg....",x);

// console.log(demo2());


// with return type with parameters

function mul(x,y)
{
    return x*y;
}


var x = mul(3,4)
console.log("Multiply = ",x);