import {test, expect} from '@playwright/test';

test('Bài 3: Todo list(Cách Thoại làm)', async ({ page }) => {
    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài học 3: Todo list
    await test.step('Đi đến trang Bài học 3: Todo list', async() => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })

    // In ra 100 công việc và thêm vào một mảng rỗng
    await test.step('Thêm vào 100 công việc', async() => {
        function fillText(){
            let congViec : string[] = [];
            for(let i = 1; i <= 100; i++){
                congViec.push(`Todo ${i}`);
            }
            return congViec;
        }
        let congViec = fillText();
        for(let viec of congViec){
            await page.locator('//*[@id="new-task"]').fill(viec);
            await page.locator('//*[@id="add-task"]').click();
        }
    })
    
    // Xóa các todo có số lẻ
    await test.step('Xóa các công việc có số lẻ', async () => {
        page.on('dialog', dialog => dialog.accept());

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    })
})

test('Bài 3: Todo list(Cách Mentor sửa)', async ({ page }) => {
    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài học 2: Product page
    await test.step('Đi đến trang Bài học 3: Todo list', async() => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })

    // In ra 100 công việc và thêm vào một mảng rỗng
    await test.step('Thêm vào 100 công việc', async() => {
        for(let i = 1; i <= 100; i++){
            await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//*[@id="add-task"]').click();
        }
    })
    
    // Xóa các todo có số lẻ
    await test.step('Xóa các công việc có số lẻ', async () => {
        page.on('dialog', dialog => dialog.accept());

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    })
})

// Bổ sung sử dụng page.off 
test('Bài 3: Todo list(Bổ sung cách sử dụng page.off)', async ({ page }) => {
    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài học 2: Product page
    await test.step('Đi đến trang Bài học 3: Todo list', async() => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })

    // In ra 100 công việc và thêm vào một mảng rỗng
    await test.step('Thêm vào 100 công việc', async() => {
        for(let i = 1; i <= 100; i++){
            await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//*[@id="add-task"]').click();
        }
    })
    
    // Xóa các todo có số lẻ
    await test.step('Xóa các công việc có số lẻ', async () => {
        const processDialog = async dialog => {
            await dialog.accept();
        };
        page.on('dialog', processDialog);
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
            // Nếu lặp được 5 lần ta sẽ không thực hiện nữa (từ 1, 2, 3, 4, 5 => sẽ xóa 1, 3, 5)
            if (i > 5){
                page.off('dialog', processDialog);
            }
        }
    })
})

test('Bài 3: Todo list(Bổ sung cách sử dụng page.off(2))', async ({ page }) => {
    // Đi đến materia.playwrightvn.com
    await test.step('Đi đến trang chủ material', async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Chọn vào Bài học 2: Product page
    await test.step('Đi đến trang Bài học 3: Todo list', async() => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })

    // In ra 100 công việc và thêm vào một mảng rỗng
    await test.step('Thêm vào 100 công việc', async() => {
        for(let i = 1; i <= 100; i++){
            await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//*[@id="add-task"]').click();
        }
    })
    
    // Xóa các todo có số lẻ
    await test.step('Xóa các công việc có số lẻ', async () => {
        const processDialog = async dialog => {
            await dialog.accept();
        };
        page.on('dialog', processDialog);
        let count = 0;
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {                
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
                count++;
            }
            // Khi xóa 1 todo thì sẽ tính là 1 count (nếu count > 5 thì sẽ dừng => sẽ xóa 1, 3, 5, 7, 9)
            if (count > 5){
                page.off('dialog', processDialog);
            }
        }
    })
})
