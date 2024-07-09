function isOdd(x)
{
    // if(x % 2 != 0)
    // {
    //     // console.log("Odd number");
    //     return "Odd number"
    // }

    return x % 2 == 1 ? "Odd" : "Even";
}

var ans = isOdd(9)
console.log(ans);