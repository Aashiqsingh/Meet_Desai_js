function getData(){


    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            resolve("Data fetched successfully")
        }, 3000);
    })

    return promise
}


async function answer(){

    console.log("Data is about to be fetched");
    
    var x = await getData();
    console.log(x);

    console.log("Ending data request");
    
    
}
answer();






// getData().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.error(error)
// })