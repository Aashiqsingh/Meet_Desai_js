const getTicket = ()=>{

    var age = 15;

    var promise = new Promise((success,failure)=>{


        setTimeout(()=>{
            // failure("Sorry, the ticket is not available at the moment.")
            // success("Your ticket has been confirmed...")
            if(age >= 18){
                success("Your ticket has been confirmed...")
            }
            else{
                failure("Sorry, you are not old enough to ride the roller coaster.")
            }
        },3000)
    })

    return promise
}


var x = getTicket()
// console.log(x);
x.then((data)=>{
    console.log(data);
    
})
x.catch((error)=>{
    console.log(error);
})
