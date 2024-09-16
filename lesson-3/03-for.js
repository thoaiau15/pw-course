// 1
let tong = 0;
for (let i=1; i<=100; i++){
    tong = tong + i;
}
console.log("1:");
console.log(tong);

// 2
console.log("2:");
for (let i = 2; i <= 9; i++){
    console.log(i);
    for (let j = 1; j <= 9; j++){
        console.log(`${i} x ${j} = `+ i*j);
    }
}

// 3
const arr = [];
for (let i=1; i<=99; i+=2){
    arr.push(i);
}
console.log("3:");
console.log(arr);

// 4
console.log("4:");
for (let i=1; i<=10; i++){
    console.log(`user${i}@example.com`);
}

// 5
let doanhThu = [
    {"month": 2, "total": 100},
    {"month": 3, "total": 210},
    {"month": 4, "total": 240}
]

function tinhTongDanhThu(doanhThu){
    let tong = 0;
    for (let i=0; i< doanhThu.length; i++){
        tong = tong + doanhThu[i].total;
    }
    return tong;
}
console.log("5:");
console.log(tinhTongDanhThu(doanhThu));
