const examGenrator = ()=>{

    // console.log("exam have going to generate");
    
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve({
                message :"Exam have successfully starting",
                DOE :"12/10/24"
            })
        },3000 );
    })

}

const questionGenerator = (data)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                message :"Questions have been generated",
                totalQuestions:10,
                DOE:data.DOE
            })
        }, 4000);
    })
}


const answerGenerator = async()=>{

    console.log("Exam have to create");
    

    var x = await examGenrator()
    console.log(x);

    console.log("Question have been generated");
    

    var y = await questionGenerator(x);
    console.log(y);
    
    console.log("All tasks have been completed");
}

answerGenerator();














// examGenrator().then((data)=>{
//     console.log(data);
//     questionGenerator(data).then((data)=>{
//         console.log(data);
        
//     }).catch((err)=>{
//         console.log(err);
        
//     })
// }).catch((error)=>{
//     console.log(error);
    
// })
