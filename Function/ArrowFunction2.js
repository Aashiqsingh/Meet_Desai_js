const Lasvegas = (amount)=>{

    console.log(amount);
    return "Lasvegas tour with amoount "+amount.budget
}

const singapore = (amount)=>{
    return "Singapore tour with amount "+amount.budget
}

const goa = (amount)=>{
    return "Goa tour with amount "+amount.budget
}


var budget = 12000;
var x;

if(budget > 10000){
    x = Lasvegas({budget:budget,person:3})
}
else if(budget > 7000){
    x = singapore({budget:budget,person:4})
}
else if(budget > 3000){
    x = goa(
        {
            budget: budget,
            person: 2,
            children: 2
        }
    )
}
else{
    console.log("Invalid budget");
}

console.log(x);