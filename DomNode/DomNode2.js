
    var data = [
        {
            id:101,
            name:"Meet smarty",
            age:19,
            email:"smarty@gmail.com",
            country:"canada"
        },
        {
            id:102,
            name:"Kajal",
            age:21,
            email:"kajal@yahoo.com",
            country:"india"
        },
        {
            id:103,
            name:"Ramesh",
            age:22,
            email:"ramesh@hotmail.com",
            country:"india"
        },
        {
            id:104,
            name:"Rajesh",
            age:22,
            email:"rajesh@yahoo.com",
            country:"pakistan"
        }
    ]



function FetchData(){

    var tbody = document.getElementById("tbody")

    for(let i=0;i<data.length;i++){

        var tr = document.createElement("tr");
        var idTd = document.createElement("td");
        var nameTd = document.createElement("td");
        var ageTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var countryTd = document.createElement("td");

        
            idTd.innerHTML = data[i].id;
            nameTd.innerHTML = data[i].name;
            ageTd.innerHTML = data[i].age;
            emailTd.innerHTML = data[i].email;
            countryTd.innerHTML = data[i].country
        
        

        tbody.appendChild(tr);
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(emailTd);
        tr.appendChild(countryTd);
    }

}



