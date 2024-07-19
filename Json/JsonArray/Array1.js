var students = [
    {
        id:1,
        name:"rahul",
        age:22,
        email:"rahul@gmail.com",
        gender:"male"
    },
    {
        id:2,
        name:"saurabh",
        age:21,
        email:"saurabh@gmail.com",
        gender:"male"
    },
    {
        id:3,
        name:"priti",
        age:20,
        email:"priti@gmail.com",
        gender:"female"
    }
]

// console.log(students);

// students = students.filter((stu)=> stu.name == "priti")
// console.log(students);

// var x = students.find((stu)=> stu.name == "rahul").name
// console.log(x);

// var x = students.filter((stu)=> stu.age > 20)
// console.log(x);

// students.forEach((stu)=>{


//     console.log(stu.name);
// })

// students = students.map((stu)=>{
//     return stu.name.toUpperCase()
// })

// console.log(students);


students = students.map((stu)=>{

    return ({
        id:stu.id,
        name:stu.name.toUpperCase(),
        age:stu.age,
        email:stu.email.toLowerCase(),
        gender:stu.gender,
        isActive: true,
    })
})

console.log(students);