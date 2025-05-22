function getResult(){
let nameStar = document.getElementById('nameStar').value;
getChomSao(nameStar);
}
function getChomSao(nameStar){
    let listStar = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']
    let listChomSao = ['UrsaMinor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo']

    let inx = -1;

    for(let i = 0; i < listStar.length; i++){
        if(listStar[i] === nameStar){
            inx = i
            break;
        }
    }

    if (inx === -1){
        document.getElementById('ketQua').innerHTML = " hong tim thay chom sao tuong ung"
    }
    else {
        document.getElementById('ketQua').innerHTML = nameStar + " Co chom sao tuong ung la" + listChomSao[inx];
    }
}

