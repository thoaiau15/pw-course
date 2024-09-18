// 1

function BMI (c, n) {
    let bmi= n/(c*c);
    if(bmi < 18.5) {
        console.log("Thiếu Cân");
    }
    else if(bmi < 25) {
        console.log("Bình Thường");
    }
    else if(bmi < 30) {
        console.log("Thừa Cân");
    }
    else if(bmi >= 30) {
        console.log("Béo Phì");
    }
};
console.log("1:");
BMI(1.81, 75);




// 2

// Cách 1
// function doC (doF) {
//     tinhDoC = (doF - 32) * 5 / 9;
//     return tinhDoC
// }

// function doF (doC) {
//     tinhDoF = doC * (9 / 5) + 32;
//     return tinhDoF
// }
// console.log("2:")
// console.log( doC(150) );
// console.log( doF(65) );

// Cách 2
function chuyenNhietDo(nhietdo, donvi){
    if( donvi === "C"){
        return (nhietdo - 32) * 5 / 9;
    }

    if( donvi === "F"){
        return nhietdo * (9 / 5) + 32;
    }
}
console.log("2:");
console.log(chuyenNhietDo(15, "C"));
console.log(chuyenNhietDo(-10, "F"));


// 3
function tongMang(arr){
    let tong = 0;
    for (let i = 0; i < arr.length; i++){
        tong = tong + arr[i];
    }
    return tong;
}


let arr = [1, 4, 7, 2];
console.log("3:");
console.log(tongMang(arr));

// 4
function locSo(arr1){
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] >= 2){
            let so = true;
            for(let j = 2; j <= arr1[i]/2;j++){
                if(arr1[i]%j == 0){
                    so = false;
                    break;
                }
            }
            if(so){
                console.log(arr1[i]);
            }
        } 
    }
}


let arr1 = [4, 7, 9, 10, 2, 0, 1];
console.log("4:");
locSo(arr1);

// 5
let users = [
    {name: "Thoai", email: "thoaiaust@gmail.com"},
    {name: "Lam", email: "lamtran1@gmail.com"},
    {name: "Duc", email: "ducnguyen1@gmail.com"}
]

function updateUser(name, newEmail) {
    for(let i = 0; i < users.length; i++){
        if(users[i].name === name){
            delete users[i].email;
            users[i].email = newEmail;
        }
    }
}

updateUser("Thoai", "thoaiau1@gmail.com");
console.log("5:");
console.log(users);

// 6

let scores = [
    {name: "Thoai", score: 85},
    {name: "Lam", score: 85},
    {name: "Duc", score: 85},
    {name: "Xuyen", score: 80}
]

function avg(arr5){
    let tong = 0;
    for (let i = 0; i < arr5.length; i++){
        tong = tong + arr5[i].score;
    }
    return tong/(arr5.length);
    
}
console.log("6:");
console.log(avg(scores));

// 7
let sanPham = [
    {name: "Đèn 35W", price: 85},
    {name: "Đèn 45W", price: 90},
    {name: "Đèn Chùm", price: 0},
    {name: "Đèn Ngủ", price: 60},
    {name: "Đèn Dây", price: 0}
]

function kiemTra(sanPham) {
    for(let i=0; i < sanPham.length; i++){
        if(sanPham[i].price <= 0){
            console.log("Có Sản Phẩm Giá Nhỏ Hơn 0");
            break;
        } 
    }
}
console.log("7:");
kiemTra(sanPham);

// 8

function gioMoCua(gio) {
    if(gio >= 9.00 && gio <= 21.00){
        console.log("Cửa Hàng Còn Mở Cửa");
    } else {
        console.log("Cửa Hàng Đã Đóng Cửa");
    }
}
console.log("8:");
gioMoCua(8.00);
gioMoCua(10.00);

// 9 

function giaVe(tuoi){
    if(tuoi <= 5){
        console.log("Miễn Phí");
    } else if (tuoi >= 6 && tuoi <= 17){
        console.log("Giá Vé Là 50K");
    }
    else if (tuoi >= 18 ){
        console.log("Giá Vé Là 100K");
    }
}

console.log("9:");
giaVe(30);
giaVe(5);
giaVe(12);

// 10
function inThang(thang){
    switch (thang) {
        case 1:
            console.log("Tháng 1");
            break;
        case 2:
            console.log("Tháng 2");
            break;
        case 3:
            console.log("Tháng 3");
            break;
        case 4:
            console.log("Tháng 4");
            break;
        case 5:
            console.log("Tháng 5");
            break;
        case 6:
            console.log("Tháng 6");
            break;
        case 7:
            console.log("Tháng 7");
            break;
        case 8:
            console.log("Tháng 8");
            break;
        case 9:
            console.log("Tháng 9");
            break;
        case 10:
            console.log("Tháng 10");
            break;
        case 11:
            console.log("Tháng 11");
            break;
        case 12:
            console.log("Tháng 12");
            break;
        default:
            console.log("Không phải tháng");
    }
}
console.log("10:");
inThang(13);
inThang(10);

// 11
function phanLoaiDiem(diem){
    if(diem >= 8){
        console.log("Giỏi")
    } else if (diem >= 6.5 && diem < 8){
        console.log("Khá");
    } else if (diem >= 5 && diem < 6.5){
        console.log("Trung Bình");
    } else {
        console.log("Yếu");
    }
}
console.log("11:");
phanLoaiDiem(7);

// 12
function trangThaiThoiTiet(nd){
    if(nd >= 30){
        console.log("Nóng")
    } else if (nd >= 20 && nd < 30){
        console.log("Mát");
    } else if (nd < 20){
        console.log("Lạnh");
    } 
}
console.log("12:");
trangThaiThoiTiet(32);
trangThaiThoiTiet(16);