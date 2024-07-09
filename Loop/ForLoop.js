// for(let i=0;i<5;i++){

//     console.log("*");
//     console.log(" ");
// }



// fact = 1;


// for(let i=1;i<=5;i++){

//     fact *= i;
// }

// console.log(fact);

// let i = 1;

// while(i<5){
//     console.log(i);
//     i++;
// }

// var num = 34567
// var rem = 0;

// while(num!=0){
//     rev = num % 10;
//     rem = rem * 10 + rev;
//     num = Math.trunc(num / 10);
// }
// console.log(rem);

// var num = 10.99;
// console.log(Math.trunc(num));


var num = 23;
var flag = 0;
for(let i=2;i<num/2;i++){

    if(num % i == 0)
    {
        flag = 1;
    }
}

if(flag === 0){
    console.log("Prime number");
}
else{
    console.log("Non prime number");
}