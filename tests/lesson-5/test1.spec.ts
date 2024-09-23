import { test , expect } from '@playwright/test';
import { count } from 'console';

const testData = {
    username: "thoaiau15",
    email: "thoaiaust@gmail.com",
    interest: ["Technology", "Sport"],
    country: "Canada",
    dateOfBirth: "2002-02-20",
    profilePicture: "lesson-3/key-takeaways.txt",
    biography: "Nội dung",
    rating: "8",
    color: "#ff0000"
};
test('Test 1', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    await page.getByLabel("Username").fill(testData.username);
    await page.getByLabel("Email").fill(testData.email);

    await page.locator('//input[@id="male"]').click();
    await page.locator('//input[@id="traveling"]').click();

    //await page.getByLabel('Interests').selectOption(testData.interest);
    await page.locator('//select[@id="country"]').selectOption(testData.country);
    await page.locator('//input[@id="dob"]').fill(testData.dateOfBirth);
    await page.locator('//input[@id="profile"]').setInputFiles(testData.profilePicture);
    await page.locator('//textarea[@id="bio"]').fill(testData.biography);
    await page.locator('//input[@id="rating"]').fill(testData.rating);
    await page.locator('//input[@id="favcolor"]').fill(testData.color);

    await page.getByRole("button", {name: "Register"}).click();

    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(testData.username);
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(testData.email);
});


