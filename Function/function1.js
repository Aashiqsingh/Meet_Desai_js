
// without return type without parameter
function Demo(){

    console.log("Without parameter without return type");
}

Demo()



// without return type with parameter

function add(a,b){
    console.log("Addition = ",a+b);
}

add(2,4)

// with return type without parameter

function demo2(){
    return "Demo2 function called !!!"
}

var x = demo2()
console.log(x);
console.log(demo2());

// with return type with parameter

function mul(x,y){

    return x*y;
}

var x = mul(3,4)
console.log("Multiply = ",x);