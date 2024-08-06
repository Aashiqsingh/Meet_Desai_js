const zomato = ()=>{

    console.log("Order is about to placed...");
    

    var promise = new Promise((resolve, reject) =>{

        setTimeout(() => {
            
            resolve({
                orderId : 101,
                amount : 499,
                message : "Order is completed"
            })
        }, 3000);
    })


    return promise;
}

zomato().then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})