let inPutWidth;
let inPutHeight;

inPutWidth = prompt("Vui long ghi can nang cua ban:");
inPutHeight = prompt("Vui long ghi chieu cao cua ban:");

let width = parseInt(inPutWidth);
let height = parseInt(inPutHeight);
let area = width * height;
document.write( 'Ket qua:' + " " + area );