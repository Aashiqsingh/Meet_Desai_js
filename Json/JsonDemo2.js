var employee = {
    id:121,
    name: 'John',
    age:25,
    salary:50000,
    department: 'Sales',
    mobile:[764875289, 786430989],
    address:{
        street:'2nd floor c.g road',
        city:'India',
        state:'Gujarat',
        pincode:10001
    },
    email:"john@gmail.com",
}

console.log(employee);
console.log(employee.mobile);

for(let i=0;i<employee.mobile.length;i++){
    console.log(employee.mobile[i]);
}

console.log(employee.address.city);
console.log(employee.address.state);

