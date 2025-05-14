function bai1(){
   let a = +document.getElementById("numA").value;
   let b = +document.getElementById("numB").value;
   let result = "";

   if (a % b === 0) {
       result = a + " " +"Chia het cho" + " " + b
   }
   else {
       result = a + " " +"Khong chia het cho" + " " + b
   }
   document.getElementById("ketQua").innerHTML = result;
}
function bai2(){
    let t = +document.getElementById("age").value;
    let result = "";

   if (t > 17) {
       result = "Qua tuoi"
   }
   else if (t >= 14){
       result = "Du tuoi"
   }
   else {
       result = "CHua du tuoi"
   }
    document.getElementById("ketQua").innerHTML = result;
}
function bai3(){
    let a = parseInt(document.getElementById("numA").value);
    let result
    if (a === 0) {
        result = "Bang 0"
    }
    else if (a > 0) {
        result=  "So" + " " + a + " " + "lon hon 0"
    }
    else {
        result = "So" + " " + a + " " + "be hon 0 "
    }
    document.getElementById("ketQua").innerHTML = result;
}
function bai4(){
    let a = parseInt(document.getElementById("numA").value);
    let b = parseInt(document.getElementById("numB").value);
    let c = parseInt(document.getElementById("numC").value);
    let result = "";

    if (a > b && a > c) {
        result = a + " " + "la so lon nhat trong 3 so"
    }
    else if (b > c){
        result = b + " " + "la so lon nhat trong 3 so"
    }
    else {
        result = c + " " + "la so lon nhat trong 3 so"
    }
    document.getElementById("ketQua").innerHTML = result;
}
function bai5(){
    let exam = parseFloat(document.getElementById("exam").value);
    let giuaKy = parseFloat(document.getElementById("giuaKy").value);
    let cuoiKy = parseFloat(document.getElementById("cuoiKy").value);
    let result = "";

    if (isNaN(exam) || isNaN(giuaKy) || isNaN(cuoiKy)) {
        result = "Vui lòng nhập đầy đủ và đúng định dạng điểm.";
    }
    else {
        let total = (exam + giuaKy * 2 + cuoiKy * 3) / 6;
        let xepLoai = "";

        if (total >= 8.0) {
            xepLoai = "Gioi" ;
        }
        else if (total >= 6.5) {
            xepLoai = "Kha" ;
        }
        else if (total >= 5.0) {
            xepLoai = "Trung binh" ;
        }
        else {
            xepLoai = "Yeu" ;
        }
        result = `Điểm trung bình: ${total.toFixed(2)} - Xếp loại: ${xepLoai}`;
    }
    document.getElementById("ketQua").innerHTML = result;
}


