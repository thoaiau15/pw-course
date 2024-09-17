// 1
const str = "Playwright";
console.log("1:");

// Sử dụng for
// for (let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

// Sử dụng for of
for(var value of str){
    console.log(value);
}

// 2
let arr = [1, 2, 3, 4];

// Sử dụng for
function inViTri(n){
    for (let i=0; i<arr.length; i++){
        if(arr[i]===n){
            console.log(`Số phía trước là: ${arr[i-1]}`);
            console.log(`Số phía sau là: ${arr[i+1]}`);
        }
    }
}
console.log("2:");
inViTri(2);

// 3 
const arr2 = "Playwright";
console.log("3:");

// Sử dụng for
//const arr3 = [];
// for (let i = arr2.length - 1 ; i >= 0 ; i--){
//     arr3.push(arr2[i]);
// }
// console.log(arr3);

// Sử dụng for of
const arr4 = [];
for(var value of arr2){
    arr4.unshift(value);
}
console.log(arr4);