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
       result = "Chua du tuoi"
   }
    document.getElementById("ketQua").innerHTML = result;
}
function bai3(){
    let a = parseInt(document.getElementById("numA").value);
    let result;
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
// function bai5(){
//     let a = parseFloat(document.getElementById("exam").value);
//     let b = parseFloat(document.getElementById("giuaKy").value);
//     let c = parseFloat(document.getElementById("cuoiKy").value);
//     let total = (a + b * 2 + c * 3) / 6
//     let result = "";
//
//     if (total >= 8.0) {
//         result = "aaaa"
//     }
//     else if (total >= 6.5) {
//         result = "bbb"
//     }
//     else if (total >= 5.0) {
//         result = "ccc"
//     }
//     else {
//         result = "ddd"
//     }
//     document.getElementById("ketQua").innerHTML =total + result;
// }
function bai6(){
    let doanhSo = +document.getElementById("doanhSo").value;
    let result = "";

    if (isNaN(doanhSo)) {
        result = "Vui long nhap doanh so ( so duong )"
    }
    else{
        let hoahong = "";
        if (doanhSo >= 15000000) {
           hoahong = doanhSo * 0.10
        }
        else if (hoahong >= 10000000) {
            hoahong = doanhSo * 0.08
        }
        else if (hoahong >= 8000000) {
            hoahong = doanhSo * 0.06
        }
        else {
            hoahong = doanhSo * 0.04
        }

        result = `Doanh số: ${doanhSo.toLocaleString()} VNĐ<br>Hoa hồng nhận được: ${hoahong.toLocaleString()} VNĐ`
    }
    document.getElementById("ketQua").innerHTML = result;
}
    function bai7(){
        let pNoiM = document.getElementById("phoneNoiMang").value;
        let pNgoaiM = document.getElementById("phoneNgoaiMang").value;
        const phiThueBao = 25000;
        let total = "";

        if (pNoiM === "" || pNgoaiM === "" ) {
            total = "Vui Long Khong De Trong Thong Tin Bat Buoc"
        }
        else if (pNoiM < 0 || pNgoaiM < 0 ) {
            total = "Phai lon hon 0"
        }
        else {
            let cuocNoiMang = pNoiM * 850;
            let cuocNgoaiMang = pNgoaiM * 1100;
            let tongCuoc = phiThueBao + cuocNoiMang + cuocNgoaiMang;

            total = `Cước thuê bao: ${phiThueBao.toLocaleString()} VNĐ<br>` +
                `Cước nội mạng: ${cuocNoiMang.toLocaleString()} VNĐ<br>` +
                `Cước ngoại mạng: ${cuocNgoaiMang.toLocaleString()} VNĐ<br>` +
                `<strong>Tổng cộng: ${tongCuoc.toLocaleString()} VNĐ</strong>`;
        }
        document.getElementById("ketQua").innerHTML = total;
    }



