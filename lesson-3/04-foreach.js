// 1
arr = [1, 2, 3, 4];
console.log("1:");

// Sử dụng for 
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Sử dụng forEach
arr.forEach(function(n){
    console.log(n);
})

// 2
arr1 = [1, 2, 3, 4];
console.log("2:");

// Sử dụng for
function tinhTong(arr1){
    let tong = 0;
    for(let i=0; i<arr1.length; i++){
        tong = tong + arr1[i];
    }
    return tong;
}
console.log(tinhTong(arr1));

let max = arr1[0];
let min = arr1[0];
for(let i=0; i<arr1.length; i++){
    if(arr1[i]>max){
        max = arr1[i];
    }
    if(arr1[i]<min){
        min = arr1[i];
    }
}
console.log(`Số Lớn Nhất Là: ${max}`);
console.log(`Số Nhỏ Nhất Là: ${min}`);

// Sử dụng forEach
// arr1.forEach(function(n){
//     console.log(n + n);
// })

// arr1.forEach((so, index) => {
//     if(so.arr1> arr1[i]){
//         console.log(so);
//     }
// })

// 3
arr2 = [2, 3, 4];
arr3 = [];

// Sử dụng For
// function gapDoi(arr2){
//     for(let i=0; i<arr2.length; i++){
//         let themMoi = arr2[i]*2;
//         arr3.push(themMoi);
//     }
// }
// console.log("3:");
// gapDoi(arr2)
// console.log(arr3);

// Sử dụng forEach
arr2.forEach(function(n){
    so = n*2;
    arr3.push(so);
})
console.log(arr3);

