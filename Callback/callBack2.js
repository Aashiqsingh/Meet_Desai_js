function science(name,percentage) {

    return name +" your addmission conmfirm in science stream with " + percentage
}

function commerce(name,percentage) {
    return name + " your addmission conmfirm in commerce stream with " + percentage
}

function arts(name, percentage) {
    return name + " your addmission conmfirm in arts stream with " + percentage
}

// cb -- callback
function addmission(cb,fname,per){

    var x = cb(fname,per)
    console.log(x);
}

var per = 45;
var Sname = "krishna";

if(per >= 90)
{
    addmission(science,Sname,per)
}
else if(per >= 70){

    addmission(commerce,Sname,per)
}
else if(per >= 50){
    addmission(arts,Sname,per)
}
else{
    console.log("Sorry, you're not eligible for admission")
}