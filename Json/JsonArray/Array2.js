var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    }
    
]

// console.log(company);

// for(let i=0;i<company.length;i++){
//     console.log(company[i]);
// }

// company.forEach((comp)=>{

//     console.log(comp.name);
// })


// var x = company.find((comp)=> comp.name === "google").employees.filter((emp)=> emp.gender =="female")
// console.log(x);

// var x = company.find((comp)=> comp.name =="facebook").employees.filter((emp)=> emp.salary > 22000)
// console.log(x);

// var x = company.map((comp)=> comp.employees.map((emp)=> emp.name))
// console.log(x);

// var x = company.find((comp)=> comp.name == "facebook").employees.filter((emp)=> emp.child >0)
// console.log(x);

var x = company.map((comp)=> comp.employees.filter((emp)=> emp.child >0))
console.log(x);