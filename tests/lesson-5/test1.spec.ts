import { test , expect } from '@playwright/test';

// Dữ liệu test
const testData = {
    username: "thoaiau15",
    email: "thoaiaust@gmail.com",
    interest: ["Technology"],
    country: "Canada",
    dateOfBirth: "2002-02-20",
    profilePicture: "lesson-3/key-takeaways.txt",
    biography: "Nội dung",
    rating: "8",
    color: "#ff0000"
};
test('Bài 1: Register page', async ({ page }) => {
    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài học 1: Register page
    await test.step('Đi đến trang Bài học 1: Register page', async() => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    })
    
    // Test nhập các giá trị vào ô thông tin
    await test.step('Thực hiện nhập đầy đủ các thông tin', async() => {
        await page.getByLabel("Username").fill(testData.username);
        await page.getByLabel("Email").fill(testData.email);
        await page.locator('//input[@id="male"]').click();
        await page.locator('//input[@id="traveling"]').click();
        await page.getByLabel('Interests').selectOption(testData.interest);
        await page.locator('//select[@id="country"]').selectOption(testData.country);
        await page.locator('//input[@id="dob"]').fill(testData.dateOfBirth);
        await page.locator('//input[@id="profile"]').setInputFiles(testData.profilePicture);
        await page.locator('//textarea[@id="bio"]').fill(testData.biography);
        await page.locator('//input[@id="rating"]').fill(testData.rating);
        await page.locator('//input[@id="favcolor"]').fill(testData.color);
    })
    
    // Thực hiện bấm nút Register
    await test.step('Nhập thông tin đầy đủ xong bấm vào Register', async() => {
        await page.getByRole("button", {name: "Register"}).click();
    })

    // Phần test thêm - Kiểm tra xem đã hiển thị trong giỏ hàng hay chưa
    await test.step('Thực hiện kiểm tra xem test trên vào thành công', async () => {
        await expect(page.locator("//tbody//tr")).toHaveCount(1);
        await expect(page.locator("//tbody//td").nth(1)).toHaveText(testData.username);
        await expect(page.locator("//tbody//td").nth(2)).toHaveText(testData.email);
    })
    
});


