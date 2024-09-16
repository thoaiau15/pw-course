// 1
let student = {"name": "Thoại", "age": 22};
//  console.log("name="+student.name , "\nage="+student.age);
console.log("1:");

 for(let stu in student){
    console.log(` ${stu}=${student[stu]}` );
}

// 2
let student2 = {"name": "Thoại", "age": 22, "salary": 20};
let tong = 0;
for(let stu in student2){
    if(student2[stu] > 0){
        tong = tong + student2[stu];
    }
}
console.log(tong);

// 3
let student1 = {"name": "Thoại", "age": 22};
arr = [];

for(let stu in student){
    arr.push(`${stu}`);
}
console.log("3:");
console.log(arr);