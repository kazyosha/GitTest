
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
