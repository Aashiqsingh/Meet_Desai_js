const lasvegas = (amount)=>{
    return "lasvegas with rupees "+ amount
}

const shirdi = (amount)=>{
    return "shirdi with rupees "+ amount
}

const australia = (amount)=>{
    return "australia with rupees "+ amount
}

const alaska = (amount)=>{
    return "alaska with rupees "+ amount
}

const travel = (budegt,cb)=>{

    var x = cb(budegt)
    console.log(x);
}

var budget = 18000;

if(budget >= 16000){
    travel(budget, lasvegas)
}
else if(budget >= 12000){
    travel(budget, shirdi)
}
else if(budget >= 8000){
    travel(budget, australia)
}
else if(budget >= 5000){
    travel(budget, alaska)
}
else{
    console.log("Insufficient budget")
}