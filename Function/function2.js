
// var a = prompt("Enter the number :-");

// var x = isOdd(a)
// console.log(x);
// function isOdd(x){


//     return x % 2 == 1;
// }


function isPrime(x){
    for(let i=2;i<x;i++){
        if(x%i==0){
            return false;
        }
        
    }
    return true;
    
}

var x = isPrime(18)
console.log(x);