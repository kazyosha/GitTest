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
        let chuyenDoi = input[i];
        if (chuyenDoi >= 'a' && chuyenDoi <= 'z') {
            output += chuyenDoi.toUpperCase();
        } else if (chuyenDoi >= 'A' && chuyenDoi <= 'z') {
            output += chuyenDoi.toLowerCase();
        }
        else {
            output += chuyenDoi;
        }

    }
    document.getElementById("ketQua").innerHTML = output;
}