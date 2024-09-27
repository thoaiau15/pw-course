function isPrime(n) {
    if (n === 2) {
        console.log("Số này là số nguyên tố");
        return;
    }
    if (n % 2 === 0 || n < 2) {
        console.log("Số này không phải là số nguyên tố");
        return;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            console.log("Số này không phải là số nguyên tố");
            return;
        }
    }
    console.log("Số này là số nguyên tố");
}
isPrime(2);
isPrime(19);
isPrime(9);
isPrime(1);