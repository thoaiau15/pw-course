function BMI(c, n) {
    let bmi = n / (c * c);
    if (bmi < 18.5) {
        console.log("Thiếu Cân");
    }
    else if (bmi < 25) {
        console.log("Bình Thường");
    }
    else if (bmi < 30) {
        console.log("Thừa Cân");
    }
    else if (bmi >= 30) {
        console.log("Béo Phì");
    }
};
BMI(1.81, 75);