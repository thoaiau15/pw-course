import {test, expect} from '@playwright/test';

test('Bài 2: Product page', async ({ page }) => {
    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài học 2: Product page
    await test.step('Đi đến trang Bài học 2: Product page', async() => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    })

    // Thực hiện click vào các sản phẩm theo yêu cầu
    await test.step('Thực hiện thêm các sản phẩm', async () => {
        await page.locator('//button[@class="add-to-cart" and @data-product-id="1"]').click({
            clickCount: 2
        });
        await page.locator('//button[@class="add-to-cart" and @data-product-id="2"]').click({
            clickCount: 3
        });
        await page.locator('//button[@class="add-to-cart" and @data-product-id="3"]').click({
            clickCount: 1
        });
    })
    
    // Phần test thêm - Kiểm tra xem đã hiển thị trong giỏ hàng hay chưa
    await test.step('Thực hiện kiểm tra xem test trên vào giỏ hàng thành công', async () => {
        await expect(page.locator("//tbody//tr")).toHaveCount(3);
        await expect(page.locator("//tbody/tr[1]/td").nth(2)).toHaveText("2");
        await expect(page.locator("//tbody/tr[2]/td").nth(2)).toHaveText("3");
        await expect(page.locator("//tbody/tr[3]/td").nth(2)).toHaveText("1");
    })
});
