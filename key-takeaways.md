# Version control system
- Là hệ thống quản lí các phiên bản
- Có 3 loại:
    - Local: lưu trên máy
    - Centralize: Lưu ở một máy tập trung
    - Distributed: Lưu ở nhiều máy khác nhau

# Git
## Git 
- Là phần mềm trên máy
- Là công cụ quản lí các phiên bản, đưa file vào Git repository

## Github
- Là dịch vụ web
- Là nơi để upload Git reposity lên

## Git - Three states
### Working Directory
- Là nơi lưu trữ các file mới hoặc file có thay đổi
- Câu lệnh là **git init** 
### Staging Area
- Là vừng đưa file vào chuẩn bị commit
- Câu lệnh là 
    - **git add .** (Khi muốn upload toàn bộ file trong Working Directory)
    - **git add <tên file>** (Khi muốn upload một file bất kì)
### Repository
- Là vùng đưa file ở Staging Area vào Repository kèm theo message
- Câu lệnh là
    - **git commit -m "nội dung"**

## Git - takeaways
- Khởi tạo thư mục quản lí bởi Git: **git init**
- Cấu hình Git:
    - Cho 1 Repo: 
        - **git config user.name " tên "**
        - **git config user.email " email "**
    - Toàn bộ máy:
        - **git config --global user.name " tên "**
        - **git config --global user.email " email "**
- Thêm file vào vùng staging:
    - Thêm file theo tên: **git add <tên file>**
    - Thêm toàn bộ file: **git add .**
- Xem trạng thái file: **git status**
    - File màu *đỏ*: Vùng *Working Directory*
    - File màu *xanh*: Vùng *Staging*
- Commit: **git commit -m "message"**
- Kiểm tra lịch sử Commit: **git log**
- Thay đổi message commit: **git commit --amend** 
    - gõ i -> vào chế độ Insert
    - gõ Esc để thoát chế độ Insert
    - gõ ":wq" -> write and quit
    - **git commit --amend -m "message"**
- Đưa file từ vùng Staging về vùng Working: **git restore --staged <tên file>**
- Đưa file từ vùng Repository về vùng Working: **git reset HEAD~x (undo x commit)**

## Branch
- Nhánh dùng để làm việc trên vùng mới, không ảnh hưởng đến vùng chính
- Tạo một nhánh có tên là ten_branch: **git branch <ten_branch>**
- Dùng để chuyển vào ten_branch để làm việc: **git check out <ten_branch>**
- Tạo và Chuyển vào nhánh có tên là ten_branch: **git check out -b <ten_branch>**

## Git - Convention (Quy Tắc)
Cú pháp: (**type** : **short_description**)
- Type: Loại commit
    - **chore**: Sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
    - **feat**: Thêm tính năng mới, test case mới,...
    - **fix**: Sửa lỗi 1 test trước đó.
- Short_description: Mô tả ngắn gọn

# Javascript basic

## Convention
Đặt tên:
- snake_case: chưa dùng 
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class

## Variable
- Khai báo:
    - var <ten_bien> = <gia_tri>;
        - Ví dụ: var firstName = "Thoai";
    - let <ten_bien> = <gia_tri>;
        - Ví dụ: let firstName = "Thoai";
    - Khác nhau Var và Let:
        - Var khai báo lại được, Let không khai báo lại đc
        - Var phạm vi toàn cục (global), Let phạm vi trong cặp {}

## Constant
- Là hằng số. Dùng để khai báo các giá trị không thể thay đổi.
- Cú pháp: **const <ten_bien> = <gia_tri>**
- Ví dụ: **const ten = "Thoai"**
- Gọi hiển thị: console.log(ten);

## Data types
- String - **let/var name = "Thoai";**
- Number - **let/var age = 15;**
- Boolean - **let/var answer = true/flase;**
- Bigint
- Symbol
- Underfined
- Null
- Opject

## Comparison Operator
- Toán tử so sánh
    - So sánh kém: >, <
    - So sánh bằng: ==, ===, !=, !==, <=, =>
- Kết quả sẽ trả về Boolean(True hoặc Flase)

## Unary Operator
- Toán tử một ngôi
- i++ bằng với i = i + 1
- i-- bằng với i = i - 1

## Arithmetic Operator
Toán tử số học: +, -, *, /, %

## Logical operator
- &&: Cả 2 vế của mệnh đề đều đúng
- ||: Môt trong hai vế đúng
- !: Đảo ngược lại giá trị của mệnh đề

## Conditional
- Điều kiện thường

        if(<Điều kiện>) {
            //code
        }
    Ví dụ

        if(n>0){
            console.log("n là số dương");
        }

- Điều kiện nâng cao
    - if...else

            if(<Điều kiện>) {
                //code
            } else {
                //code
            }

    - if..else if

            if(<Điều kiện>) {
                //code
            } else if {
                //code
            }
    
    - switch ... case

            switch (<Thuộc tính>){
                case <Giá trị>:
                    //code
                    break;
                .
                .
                .
                default:
                    //code
            }


## Loops
Vòng lặp
- for 

        for(<Khởi tạo>; <Điều kiện dừng>; <Điều kiện tăng>) {
            //code
        }

        for(let i = n; i <= m, i++){
            //code
        }
    Ví dụ

        for(let i = 1; i <= 5; i++){
            console.log("Giá trị của i là: ", i);
        }
    Kết quả

        Giá trị của i là: 1
        Giá trị của i là: 2
        Giá trị của i là: 3
        Giá trị của i là: 4
        Giá trị của i là: 5
    
- for...in

    Ví dụ

        let student = {"name": "Thoại", "age": 22};
        for(let stu in student){
            console.log(`${stu}=${student[stu]}`);
        }
    Kết quả

        name: Thoại 
        age = 22

- foreach

    Ví dụ

        arr = [1, 2, 3, 4];
        arr.forEach(n => {
            console.log(n);
        })
    Kết quả

        1
        2
        3
        4

- forof

    Ví dụ

        const str = "Thoai";
        for(var value of str){
            console.log(value);
        }
    Kết quả

        T
        h
        o
        a
        i

- Vòng lặp nâng cao: break và continue
    - **break** là thoát hẵng 
    - **continue** là bỏ qua điều kiện đó chạy qua vòng lặp tiếp theo

## Object: 
- Đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số.
- Khai báo:

        let/const <ten_object> = {
            <thuoc_tinh>: <gia_tri>,    
            ...                         
        }
    - <thuoc_tinh>: giống quy tắc đặt tên biến
    - <gia_tri>: có kiểu giống biến hoặc là 1 object khác.
        
- ViDu:
        let/const thongtin = {
            ho: "Au",
            tenlot: "Duong",
            ten: "Thoai",
            tuoi: 22
        }

        let/const truonghoc = {
            tentruong: "Dai Hoc Can Tho",
            matruong: "CTU",
            diachi: {
                so: "1",
                tenduong: "3 thang 2",
                quan: "Ninh Kieu"
            }
        }

- Gán lại:

        <ten_object>.<thuoc_tinh> = <gia_tri_moi>;
        
        ViDu: thongtin.ten = Thoaiii

## Array
- Khai báo: Arr = [ gt1, gt2, gt3,...]
VD: Numbers = [1, 2, 3, 4, 5]
- Truy xuất mảng
    - Độ dài mảng: length -> Arr.length
    - Lấy phần tử theo index: [0], [1], [2] -> Arr[0], Arr[1],...

## Function
- Function (hàm) là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- Khai báo:

        function <nameFunction>() {
            // code
        }
### Format Code
**Option + Shift + F**

# DOM (Document Object Model)

## Cấu trúc DOM cơ bản của một trang web bao gồm các thẻ 
- Thẻ html
    - Thẻ head
        - title 
    - Thẻ body
        - h1
        - a

## Ví dụ về element
    Thẻ mở          Thẻ đóng
    <option>Việt Nam</option>

    Thẻ tự đóng                                 
    <img src="image.jpg" alt="Image description"/>

    <option value="usa">United States</option>

    Thẻ mở                  Giá trị                     Thẻ đóng
    <option     value=      "usa">      United States   </option>
              Thuộc Tính                    Text

## Một vài thẻ DOM thường gặp 
- Thẻ  div (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ h1 đến h6 (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ
lớn đến bé.
- Thẻ form: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to
- Thẻ radio button
- Thẻ checkbox
- Thẻ list và dropdown
- button
- Thẻ table
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm
    - tbody
        - tr -> td = table data
- Thẻ date picker
- Thẻ slider
- Thẻ iframe

### Mô tả cấu trúc html của 1 bảng (table)
- Thẻ table
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm
    - tbody
        - tr -> td = table data


