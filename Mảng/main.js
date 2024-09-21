// Cách khai báo mảng
// Giống như biến nhưng giá trị phía sau là dấu vuông => mảng
// thứ cần quan tâm trong 1 mảng là index 
var arrName = ['nam','khai','hưng','thúy','thịnh','thảo','trâm anh'];
console.log(arrName[1]);

arrName[2] = 'Nam';

// Trong mảng thì cái quan trọng nhất đều xoay quanh 4 tác vụ : Thêm - Xóa - Sửa - Lấy ra
// Một số thuộc tính của mảng 
// index (vị trí)
// arr.lenght ( lấy ra chiều dài của mảng)
console.log('arrName',arrName.length);

// Duyệt mảng : In ra màn hình console log của browser
for(var index=0;index <= arrName.length-1;index++){
    console.log(arrName[index]);
}
//------------------------- hàm THÊM GIÁ TRỊ VÀO MỘT MẢNG ----------------------------------
//push() : Hàm thêm 1 hoặc nhiều giá trị vào cuối mảng 
// arrName.push('Uyên','Linh');
arrName.push('Uyên','Linh'); // chèn vào cuối mảng 

// unshift() : Hàm thêm 1 hoặc nhiều giá trị vào đầu mảng
arrName.unshift('Bảo','Trâm');
console.log(arrName);

//------------------------- hàm XÓA GIÁ TRỊ VÀO MỘT MẢNG ----------------------------------
// splice() : xóa 1 hoặc nhiều giá trị trong mảng => thay đổi index cũng như leght của mảng
// trong hàm này có 2 tham số : (index,số phần tử muốn xóa)
// arrName = ['nam','khai','hưng','thúy','thịnh','thảo','trâm anh'];
// Sau khi chạy hàm này thì hưng sẽ bị xóa khỏi mảng ( vì ở index =2 và chỉ xóa 1 phần tử)
arrName.splice(2,1); // xóa tại index =2 và số phần tử muốn xóa là 1. 
console.log(arrName);

// shift() : lấy ra 1 phần tử ở đầu mảng và xóa đi phần đó.
var hoTen = arrName.shift();
console.log('hoTen', hoTen);

// pop() : lấy ra 1 phần tử ở cuối mảng và xóa đi phần đó.
var hoTen = arrName.pop();
console.log('hoTen',hoTen);


