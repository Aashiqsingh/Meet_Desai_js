function punjabi(person ,amount){
    return "Your total bill of punjabi food is "+ person*amount;
}

function gujarati(person ,amount){

    return "your total bill of gujarati food is "+ person*amount;
}

function marathi(person ,amount){
    return "your total bill of marathi food is "+ person*amount;
}

var food = "punjabi";
var person = 5;
let flag;

switch(food){
   case "punjabi":
        flag = punjabi(person,120)
        console.log(flag);
        break;

    case "gujarati":
        flag = gujarati(person,150)
        console.log(flag);
        break;

    case "marathi":
        console.log(marathi(person,100))
        break;

    default:
        console.log("Invalid choice");
}