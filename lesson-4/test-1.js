let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K9";
const crew = [
    "Uyên Thanh",
    "Minh Trang Bui",
    "Lan Anh",
    "Khanh Đinh",
    "Nguyễn Duyên",
    "Trường Lâm",
    "Lê Long",
    "An Khánh Nguyễn",
    "Tuấn Phạm",
    "Phạm Thu Thủy", 
    "Dương Thoại"
]

// 1. Khởi động Tàu Vũ trụ K9
function launchShip(arr) {
    return arr.join(", ");
}
let inRa = launchShip(crew);
console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${inRa} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K9!`);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
let khoangCach = calculateDistance(1000, 24);
console.log(khoangCach);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}
let inSo = convertTimeToHex(120);
console.log(inSo);

// 4. Khám phá kho báu
function decryptCode(pass) {
    let chuoi = "";
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] == pass[i].toUpperCase()) {
            chuoi = chuoi + pass[i].toLowerCase();
        }
        else if (pass[i] == pass[i].toLowerCase()) {
            chuoi = chuoi + pass[i].toUpperCase();
        }
    }
    return chuoi;
}
let daoNguoc = decryptCode("Decrypt Code");
console.log(daoNguoc);

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();