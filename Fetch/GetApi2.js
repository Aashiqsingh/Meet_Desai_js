const Getdata = async ()=>{

    const response = await fetch("https://reqres.in/api/users?page=2",{
        method: "GET"
    })

    const res = await response.json()
    console.log(res.data);


    var tbody = document.getElementById("tbody")

    for(let i=0;i<res.data.length;i++){
        var tr = document.createElement("tr")
        var idtd = document.createElement("td")
        var emailtd = document.createElement("td")
        var fname = document.createElement("td")
        var lname = document.createElement("td")
        var avatartd = document.createElement("td")
        var img = document.createElement("img")

        idtd.innerHTML = res.data[i].id
        emailtd.innerHTML = res.data[i].email
        fname.innerHTML = res.data[i].first_name
        lname.innerHTML = res.data[i].last_name
        img.src = res.data[i].avatar
        


        tbody.appendChild(tr)
        tr.appendChild(idtd)
        tr.appendChild(emailtd)
        tr.appendChild(fname)
        tr.appendChild(lname)
        tr.appendChild(avatartd)
        avatartd.appendChild(img)
    }
    

}