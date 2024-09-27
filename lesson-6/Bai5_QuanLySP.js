let productList = [];

function addProduct(name, price) {
    productList.push({
        Tên: name,
        Giá: price
    });
}

function removeProduct(name) {
    productList = productList.filter(products => products.Tên !== name);

}

function calculateTotal() {
    let tong = 0;
    for (let i = 0; i < productList.length; i++) {
        tong = tong + productList[i].Giá;
    }
    return tong;
}

addProduct("Táo", 5000)
addProduct("Chuối", 3000)
console.log(productList);

removeProduct("Táo");
console.log(productList);

console.log(calculateTotal());



