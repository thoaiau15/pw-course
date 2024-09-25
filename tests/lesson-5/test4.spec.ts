import {test, expect} from '@playwright/test';

test('Bài 4: Personal notes', async ({ page }) => {

    // Vào trang Vnexpress lấy dữ liệu
    let titles, contents;
    await test.step("Vào trang Vnexpress lấy dữ liệu", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' }); //domcontentload thực hiện lấy dữ liệu khi cấu trúc DOM đc chạy nhưng không cần đợi cá file phương tiện
        titles = await page.locator('//h3[@class="title-news"]/a').allTextContents(); 
        console.log(titles);
        contents = await page.locator('//p[@class="description"]/a').allTextContents();
        console.log(contents);
    })

    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài 4: Personal notes
    await test.step('Đi đến trang Bài 4: Personal notes', async() => {
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    // Thêm 10 note 
    await test.step("Thêm 10 note có tiêu đề và một phần nội dung", async () => {
        for( let i=0; i<= 10; i++){
            await page.locator("//input[@id='note-title']").fill(titles[i]);
            await page.locator("//textarea[@id='note-content']").fill(contents[i]);
            await page.locator("//*[@id='add-note']").click();
        }
    })
    
    // Tìm kiếm thử một note
    await test.step("Thêm 10 note có tiêu đề và một phần nội dung", async () => {
        await page.locator("//*[@id='search']").fill("Công");
    })
})