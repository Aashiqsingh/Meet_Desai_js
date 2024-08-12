const getData = async()=>{


    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET"
    })

    const res = await response.json()
    console.log(res.data);

    var tbody = document.getElementById("tbody")

    for(let i=0;i<res.data.length;i++){

        var tr = document.createElement("tr")
        var tdid = document.createElement("td")
        var tdname = document.createElement("td")
        var tdemail = document.createElement("td")
        var tdage = document.createElement("td")
        var statustd = document.createElement("td")
        var actd = document.createElement("td")
        var btn = document.createElement("button")
        btn.setAttribute("class","btn btn-danger")
        btn.innerHTML = "DELETE"
        btn.addEventListener("click",async()=>{
            const response = await fetch("https://node5.onrender.com/user/user/"+res.data[i]._id,{
                method:"DELETE",
                
                
            })

            console.log(response.ok);

            getData()
            
        })
        

        tdid.innerText = res.data[i]._id
        tdname.innerText = res.data[i].name
        tdemail.innerText = res.data[i].email
        tdage.innerText = res.data[i].age
        statustd.innerText = res.data[i].isActive



        tbody.appendChild(tr)
        tr.appendChild(tdid)
        tr.appendChild(tdname)
        tr.appendChild(tdemail)
        tr.appendChild(tdage)
        tr.appendChild(statustd)
        tr.appendChild(actd)
        actd.appendChild(btn)

    }
    
}