
function heightAndWidth() {
    let width = +document.getElementById('width').value;
    let height = +document.getElementById('heigh').value;
    let area = width * height;
    document.getElementById('ketQua').innerHTML ='Ket qua la: ' + area;
}

function year() {
    let input = document.getElementById("nam").value;
    let y = parseInt(input);


    if (input.trim() === "") {
        document.getElementById('ketQua').innerHTML = " Vui lòng nhập năm cần kiểm tra.";
    }
    else if (y > 0){
        if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
            document.getElementById("ketQua").innerHTML = 'Năm ' + y + ': Là Năm Nhuận';
        } else {
            document.getElementById("ketQua").innerHTML = 'Năm ' + y + ': Là Năm Không Nhuận';
        }
    } else {
        document.getElementById('ketQua').innerHTML = "Năm phải là số dương"
    }
}
function year1() {
    let input1 = document.getElementById("nam").value;
    let y = parseInt(input1);

    if (input1.trim() === "") {
        document.getElementById('ketQua').innerHTML = " Vui lòng nhập năm cần kiểm tra.";
    }
    else if (y > 0){
        if (y % 4 ===0 && y % 100 !== 0 ) {
            document.getElementById("ketQua").innerHTML = 'Năm ' + y + ': Là Năm Nhuận';
        } else {
            document.getElementById("ketQua").innerHTML = 'Năm ' + y + ': Là Năm Không Nhuận';
        }
    } else {
        document.getElementById('ketQua').innerHTML = "Năm phải là số dương"
    }

}
function login() {
  let userName = document.getElementById("loginUser").value;

  if (userName === 'Tam'|| userName === 'Cuong') {
      let password = document.getElementById("password").value;
      if (password === '123') {
          document.getElementById("ketQua").innerHTML= "Chao Mừng:" + userName;
      }
      else if (password === "") {
          document.getElementById('ketQua').innerHTML = 'Vui lòng điền Password'
      }
      else {
          document.getElementById('ketQua').innerHTML = "Sai mật khẩu";
      }
  }
  else if (userName === "") {
      document.getElementById("ketQua").innerHTML = "Vui lòng điền tên tài khoản của bạn";
  }
  else {
      document.getElementById('ketQua').innerHTML = "Sai tên tài khoản, vui lòng thử lại"
  }

}
function traiCay() {
    let browser = document.getElementById("select").value;
    switch (browser) {
        case 'trung':
        case  'ga':
            alert("La Dong Vat")
            break;
        case 'bap':
        case 'cuCai':
        case 'caRot':
        case 'rau':
            alert('Thuc Vat')
            break;
    }
}
function numSimple(){
    let number = document.getElementById("numBer").value;
    switch (number) {
        case '1':
            document.getElementById('ketQua').innerHTML = "Số bạn chọn là 1"
            break;
        case '2':
            document.getElementById('ketQua').innerHTML = "Số bạn chọn là 2";
            break;
        case '3':
            document.getElementById('ketQua').innerHTML = "Số bạn chọn là 3";
            break;

        default:
            document.getElementById('ketQua').innerHTML = number + " " + "là số bạn chọn"
    }
}
function  BMI(){
    let width = document.getElementById("width").value;
    let heigh = document.getElementById("heigh").value;
    // let bmi = width / (heigh ^ 2) ;
    let bmi = width / ((heigh / 100) * (heigh / 100));

    if (bmi < 18) {
        document.getElementById('ketQua1').innerHTML = bmi + " " +':Can nang cua ban Underweight'
    }
    else if (bmi < 25) {
        document.getElementById('ketQua1').innerHTML = bmi + " " +':Can nang cua ban Normal'
    }
    else if (bmi < 30) {
        document.getElementById('ketQua1').innerHTML = bmi + " " +':Can nang cua ban Overweight'
    }
    else {
        document.getElementById('ketQua1').innerHTML = bmi + " " +':Can nang cua ban Obese'
    }
}
function Month(){
    let dayOfMonth = document.getElementById("month").value;
    switch (dayOfMonth) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.getElementById("ketQua").innerHTML ="Tháng " + dayOfMonth +" "+"có 31 ngày";
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            document.getElementById("ketQua").innerHTML ="Tháng " + dayOfMonth +" "+"có 30 ngày";
            break;
        default:
            document.getElementById("ketQua").innerHTML ="Tháng " + dayOfMonth +" "+"có 28 ngày";
    }
}
function yesClick(){
    alert("Yes i do");
}
function noClick(){
    let a = Math.round(Math.random() * window.innerWidth);
    let b = Math.round(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left =  a + 'px';
    document.getElementById("btnNo").style.top =  b + 'px';
}
