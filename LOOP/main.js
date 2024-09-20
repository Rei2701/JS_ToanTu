// Hàm TÍNH TỔNG SỐ CHẴN
document.getElementById('btnTinhTongChan').onclick = function () {
    var input = Number(document.getElementById('input_3').value);
    var ketqua = 0;
    var buocDem = 1;
    while (buocDem <= input) {
        if (buocDem % 2 === 0) {
            ketqua += buocDem;
        }
        buocDem++;
    }
    document.getElementById('ketqua_3').innerHTML = ketqua;
}

// HÀM TÍNH Kiểm tra số nguyên tố
// Số nguyên tố là số tự nhiên chỉ chia được cho 1 và chính nó
document.getElementById('btnKiemTraSoNguyenTo').onclick = function () {
    var input = Number(document.getElementById('input_4').value);
    var buocDem = 1;
    var soUoc = 0;
    while (buocDem <= input) {
        if (input % buocDem === 0) {
            soUoc++;
        }
        buocDem++;
    }
    // Kiểm tra biến đếm
    if (soUoc === 2) {
        document.getElementById('ketqua_4').innerHTML = input + ' - Là số nguyên tố';
    }
    else {
        document.getElementById('ketqua_4').innerHTML = input + ' - Không là số nguyên tố';
    }
}

// Hàm cho phép người dùng nhập vào một số và in ra số * tương ứng
// B1_ Bắt sự kiện tới nút
document.getElementById('btnInSoSao').onclick = function () {

    //input- number
    var input = Number(document.getElementById('input_5').value);
    var ketqua = '';
    var bienDem = 1;
    //output - string
    //process
    while (bienDem <= input) {
        ketqua = ketqua + '*';
        bienDem++;
    }
    document.getElementById('ketqua_5').innerHTML = ketqua;
}

// VD 6 - HÀM LỒNG. input 2 giá trị cột ngang & cột dọc => in ra số sao bằng số cột và số hàng tương ứng

document.getElementById('btnInSoSao_6').onclick = function () {
    // input - 2 number
    var buocDem1 = 1;
    var buocDem2 = 1;
    var soHang = Number(document.getElementById('input_6_hang').value);
    var soCot = Number(document.getElementById('input_6_cot').value);
    // output - string
    var ketqua = '';
    //prrocess
    for (var i = 1; i <= soHang; i++) {
        //Code để sinh ra 1 hàng 
        for (var z = 1; z <= soCot; z++) {
            ketqua = ketqua + '*';
        }
        ketqua += '<br/>';
    }
    document.getElementById('ketqua_6').innerHTML = ketqua;
}

// VD 7 - Cho người dùng input 1 số. In ra các số nguyên tố nhỏ hơn hoặc bằng số người dùng nhập 

// document.getElementById('btnInCacSoNguyenTo').onclick = function(){
//     //input number
//     var input = Number(document.getElementById('input_7').value);
//     var soCanKiemTra = 0;
//     //output string numbers
//     var ketqua = '';
//     //process
//     // Kiem tra vòng lặp
//     for(var i=0;i<=input;i++){
//          // Kiem tra so nguyen To
//     var soUoc =0;
//     for (var z=0;z <=soCanKiemTra;z++){
//            if(soCanKiemTra%z ===0){
//                soUoc ++;
//            }
//     }
//     if(soUoc === 2){
//        ketqua += soCanKiemTra + '';
//         }
//     }
//     document.getElementById('ketqua_7').innerHTML = ketqua;
// }
document.getElementById('btnInCacSoNguyenTo').onclick = function () {
    var number = Number(document.getElementById('input_7').value);

    var ketqua = '';

    for (var iSo = 2; iSo <= number; iSo++) {
        // Chạy từ 2->n kiểm tra từng số có phải là số nguyên tố hay không dựa vào hàm đã xây dựng
        var checkSNT = kiemTraSoNguyenTo(iSo);
        //Nếu true => iSo lúc đó sẽ là số Nguyen Tố
        if (checkSNT) {
            ketqua += iSo + '';
        }
        document.getElementById('ketqua_7').innerHTML = ketqua;
    }
}


function kiemTraSoNguyenTo(number) {
    //input: number
    //output: true or false ? 
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}