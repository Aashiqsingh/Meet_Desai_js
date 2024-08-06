const order = ()=>{

    console.log("Order is about to be placed");
    
    return promise = new Promise((resolve , reject)=>{

        setTimeout(() => {
            resolve({
                orderId : 101,
                amount : 230,
                message : "Your order has been confirmed"
            })
        }, 3000);
    })


}

const payment = (data)=>{

    console.log("payment is about to be received");
    

    return promise = new Promise((success , failure)=>{
        setTimeout(() => {
            
            // success({
            //     orderId : data.orderId,
            //     amount: data.amount,
            //     message : "Payment successfully"
            // })
            failure({
                orderId : data.orderId,
                amount: data.amount,
                message : "Payment failed"
            })
        }, 4000);
    })
}


order().then((data)=>{
    console.log("order confirm => ",data);

    payment(data).then((res)=>{
        console.log("payment confirm => ",res);
    }).catch((err)=>{
        console.log("payment failed => ",err);
    })
}).catch((error)=>{
    console.log("order cancel => ",error);
})
