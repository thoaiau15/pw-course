import {test, expect} from '@playwright/test';

test('Test 2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator('//a[@href="02-xpath-product-page.html"]').click();

    await page.locator('//button[@class="add-to-cart" and @data-product-id="1"]').click({
        clickCount: 2
    });
    await page.locator('//button[@class="add-to-cart" and @data-product-id="2"]').click({
        clickCount: 3
    });
    await page.locator('//button[@class="add-to-cart" and @data-product-id="3"]').click({
        clickCount: 1
    });


    await expect(page.locator("//tbody//tr")).toHaveCount(3);
    await expect(page.locator("//tbody/tr[1]/td").nth(2)).toHaveText("2");
    await expect(page.locator("//tbody/tr[2]/td").nth(2)).toHaveText("3");
    await expect(page.locator("//tbody/tr[3]/td").nth(2)).toHaveText("1");


});
