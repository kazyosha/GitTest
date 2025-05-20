 src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
let x = 0
let array = Array();

function add_element_to_array() {
    array[x] = document.getElementById('txtValue').value;
    alert("Phan tu: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txtValue").value = "";
}
function display_array() {
    let a = "<hr/>";
    for (i = 0; i < array.length; i++) {
        a += "Phan tu " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("ketQua").innerHTML = a;
}

function chuyenDoi() {
    let input = document.getElementById('numInput').value;
    let output ="";

    for(let i = 0; i < input.length; i++) {
        let chuyen = input[i];
        if (chuyen >= 'a' && chuyen <= 'z') { // Unicode của chữ cái thường là 97 đến 122
            output += chuyen.toUpperCase();
        } else if (chuyen >= 'A' && chuyen <= 'z') { //Unicode của chữ cái in hoa là 65 đến 90
            output += chuyen.toLowerCase();
        }
        else {
            output += chuyen;
        }

    }
    document.getElementById("ketQua").innerHTML = output;
}