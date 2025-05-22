function getResult(){
    let inputTu = document.getElementById('inputTuDien').value;
    let from = document.getElementById('selectFromTuDien').value;
    let to = document.getElementById('selectToTuDien').value;
    getDictionary(inputTu,from,to)
}
function getDictionary(tuDien,from,to){
    let english = ["computer", "keyboard", "mouse", "screen", "internet", "software", "hardware", "network", "database", "program"]
    let vn = ["máy tính", "bàn phím", "chuột", "màn hình", "internet", "phần mềm", "phần cứng", "mạng", "cơ sở dữ liệu", "chương trình"]

    let indexEn = -1;
    let indexVn = -1;
    if(from === "en" && to === "vn") {
        for(let i = 0; i < english.length; i++){
            if (english[i] === tuDien ){
                indexEn = i
                break;
            }
        }
        if(indexEn === -1 ){
            document.getElementById('ketQua').innerHTML = " Khong tim thay tu tuong ung"
        }
        else {
            document.getElementById('ketQua').innerHTML = tuDien + " Co nghia la " + vn[indexEn];
        }
    }
    else if (from === "vn" && to === "en") {
        for(let i = 0; i < vn.length; i++){
            if (vn[i] === tuDien){
                indexVn = i;
                break;
            }
        }
        if(indexVn === -1 ){
            document.getElementById('ketQua').innerHTML = " Khong tim thay tu tuong ung"
        }
        else {
            document.getElementById('ketQua').innerHTML = tuDien + " Co nghia la" + " " + english[indexVn];
        }
    }
        if(from === to) {
            document.getElementById('ketQua').innerHTML=  tuDien + " Co nghia la" + " " + tuDien;
        }
}
