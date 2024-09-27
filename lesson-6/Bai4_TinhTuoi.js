function calculateAge(ns, ht) {
    if (ns > ht) {
        console.log("Năm sinh không hợp lệ!");
    } else {
        console.log(ht - ns);
    }

}

calculateAge(2002, 2024);
calculateAge(2026, 2024);