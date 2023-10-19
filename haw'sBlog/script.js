 const card = document.querySelector('#card');
const cardHeader = card.querySelector('header');
const resetBtn = document.querySelector('.reset');

// Khởi tạo một biến để theo dõi liệu nút chuột có được nhấp không
let clicked = false;

// Lưu trữ vị trí ban đầu của thẻ
let startTop = card.offsetTop;
let startLeft = card.offsetLeft;

// Các biến để lưu trữ phần bù giữa vị trí nhấp chuột và vị trí của thẻ
let offsetX, offsetY;

// Thêm trình nghe sự kiện cho tiêu đề thẻ cho sự kiện giảm chuột
cardHeader.addEventListener('mousedown', (e) => {
    // Đặt biến 'nhấp' thành True khi nhấn nút chuột
    clicked = true;

    // Tính toán bù giữa vị trí nhấp chuột và vị trí của thẻ
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
});

// Thêm một trình nghe sự kiện cho toàn bộ tài liệu cho sự kiện Up Chuột
document.addEventListener('mouseup', () => {
    // Đặt biến 'nhấp' thành sai khi nút chuột được phát hành
    clicked = false;
});

// Thêm một trình nghe sự kiện vào sự kiện di chuyển chuột
document.addEventListener('mousemove', (e) => {
    // Kiểm tra xem nút chuột không được nhấp chưa và nếu vậy, hãy thoát chức năng
    if (!clicked) return;

    // Cập nhật vị trí của thẻ dựa trên vị trí hiện tại của chuột và phần bù
    const { clientX, clientY } = e;
    card.style.left = `${clientX - offsetX}px`;
    card.style.top = `${clientY - offsetY}px`;
});

// Chức năng đặt lại vị trí của thẻ về trạng thái ban đầu
function resetPosition() {
    card.style.left = `${startLeft}px`;
    card.style.top = `${startTop}px`;
}

// Thêm một trình nghe sự kiện nhấp vào nút đặt lại để gọi chức năng 'đặt lại'
resetBtn.addEventListener('click', resetPosition);