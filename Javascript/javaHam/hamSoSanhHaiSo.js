function GetCompare(a,b){
    a = document.getElementById("numberA").value;
    b = document.getElementById("numberB").value;
    let result;
    if(a > b){
        result =  a + " lớn hơn " + b;
    } else {
        result=  a + " bé hơn " + b;
    }
    document.getElementById("ketQua").innerHTML = result;
}

