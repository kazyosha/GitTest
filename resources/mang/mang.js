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