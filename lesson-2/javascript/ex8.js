console.log("Cach 1");
for(let i = 1; i <= 100; i++) {
    if(i % 4 === 1) {
        console.log(i);
    }
}

console.log("Cach 2");
for(let i = 1; i <= 100; i+=4) {
    console.log(i);
}