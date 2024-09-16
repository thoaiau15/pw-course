
// 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log("1: ");
console.log(car.year);

// 2
let person = {
    name: "Thoai",
    address: {
        street: "Phu Loi",
        city: "Soc Trang",
        country: "Soc Trang"
    }
}
console.log("2: ");
console.log(person.address.street);

// 3
let student = {
    name: "Thoai",
    grades: {
        math: 10,
        english: 7,
    }
}
console.log("3: ");
console.log(student["grades"]["math"]);

// 4
let products = {
    "Tao": 5,
    "Buoi": 4,
    "Chuoi": 10
}
console.log("4: ");
for(let product in products){
    console.log(`Tên: ${product}, Giá: ${products[product]}` );
}

// 5
let settings = {
    volume: 15,
    brightness: 10
}
settings.volume = 20;
console.log("5: ");
console.log(settings);

// 6
let bike = {
    name: "Ducati"
}
bike.color = "Black";
console.log("6: ");
console.log(bike);

// 7
let employee = {
    name: "Thoai",
    age: 18
}
delete employee.age;
console.log("7: ");
console.log(employee);

// 8
// const school = {
//     classA : {
//         "An": 1,
//         "Bình": 1,
//         "Châu": 1
//     },
//     classB : {
//         "Đào": 1,
//         "Hương": 1,
//         "Giang": 1
//     },
// }
const school = {
    classA : ['An', 'Bình', 'Châu'],
    classB : ["Đào", "Hương", "Giang"]
}
console.log("8: ");
console.log(school);