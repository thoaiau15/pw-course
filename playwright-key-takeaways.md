# Playwright

#### allTextContents() 
- trả về tất cả văn bảng của phần tử dưới dạng một mảng các chuỗi

#### waitUntil: 'domcontentloaded' 
- Có nghĩa là đợi cho đến khi sự kiện DomContentLoaded xảy ra. Nó sẽ tiếp tục khi cấu trúc DOM của trang đã được tải, nhưng không đợi các tài nguyên như hình ảnh hoặc stylesheet hoàn tất tải.

- **vd**: await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' }); 

#### page.on('dialog',...)
- Đây là cách để đăng ký một trình xử lý sự kiện (event handler) cho sự kiện **dialog** trên đối tượng **page**.

- Sự kiện dialog được kích hoạt khi một hộp thoại (như **alert**, **confirm**, hoặc **prompt**) xuất hiện trên trang.

- vd: page.on('dialog', dialog => dialog.accept()); 
    - là phương thức được gọi để tự động chấp nhận hộp thoại đó. Tùy thuộc vào loại hộp thoại, việc chấp nhận có thể tương ứng với việc nhấn nút "OK" hoặc "Yes".

