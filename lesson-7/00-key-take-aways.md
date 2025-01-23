# Git: Stashing

- Stash: lưu các công việc đang làm ở branch này vào vùng nhớ tạm.
    - Câu lệnh: **git stash**
- Unstash: lấy các công việc đã lưu trong vùng nhớ tạm ra.
    - Câu lệnh: **git stash pop**

# DOM 
- self: node hiện tại.
- parent: cha (node phía trên trực tiếp)
- children: con (node phía dưới trực tiếp)
- ancestor: tổ tiên 
- descendant: hậu duệ (các node con, cháu, chắt,...)
- sibling: anh em (node cùng cấp và cùng cha)
- following: theo sau (các node bên tay phải)
- preceding: phía trước (các node bên tay trái, trừ ancestor)
- following-sibling: anh em phía sau
- preceding-sibling: anh em phía trước

# XPath
- wildcard: * (Dò tất cả)
    - //*[@id = "user_name"]
- chứa thuộc tính
    - //input[@type = "text"]
- and và or
    - //input[@type = "text" and/or @id = "2"]
- innerText: text()
    - //input[text() = "Nhập vào..."]
- Element as attribute
- normalize-space() (Bỏ qua những space)
    - //input[normalize-space() = "Tiêu đề"]
- contains (Dò chỉ cần chứa trong chuỗi)
    - //h1[contains(text(), "Tiêu đề")]
- starts-with
    - //h1[starts-with(text(), "Tiêu")]
- ends-with
    - //h1[ends-with(text(), "đề")]
- not
    - //h1[not(starts-with(text(), "Tiêu"))]