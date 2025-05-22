function temperatureConverter(value) {
    value = parseFloat(value);
    let total = (value-32) / 1.8;
    document.getElementById("ketQua").innerHTML = total;
}


function minArray(arr) {
    if(arr.length === 0)
        return -1;
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3,5,2,7,8,2,4,7,44,3,7,9,8,3,2];
let minn = minArray(arr1);
alert(minn);

/*
    B1: khai báo mảng arr1
    B2: Gán gia trị mảng arr1 cho minArray, nếu độ dài mảng minArray(arr1) = 0 thì trả kết quả là -1 kết thúc sự kiện
    B3: khai báo biến min = arr[0] =  giá trị đầu tiên trong mảng
    B4: thực hiện vùng lập - nếu arr[i] < min thì gán gán arr[i] = min kết thúc trả về kết quả của min
    B5: gán giá trị của min về cho minn sau đó in ra minn
 */
