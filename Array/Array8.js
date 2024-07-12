var lang = ["english","hindi","gujarati","marathi","french","urdu","telgu"]

// const deleteLang = (langName)=>{


//     return lang.filter((lang)=>{

//         return lang!= langName
//     })
// }


// const deleteLang = (langName)=>{


//     return lang.filter((lang)=> lang!= langName)
// }

const deleteLang = (langName)=> lang.filter((lang)=> lang!= langName)
var x = deleteLang("telgu")
console.log(x);