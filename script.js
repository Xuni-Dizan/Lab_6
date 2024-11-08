// Xử lý khi click vào nút "Continue"
document.querySelectorAll('.continue').forEach((button) => {
    button.addEventListener('click', () => {
        // Ẩn tất cả các card
        document.querySelectorAll('.card').forEach((card) => {
            card.style.display = 'none';
        });
        
        // Hiển thị form-container
        document.getElementById('form-container').style.display = 'block';
    });
});

//
document.querySelectorAll('.card .guide').forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.closest('.card').dataset.lang;
        alert(`Showing guide for ${lang}`);
        // Thêm logic để mở hướng dẫn
    });
});

// Xử lý khi click vào liên kết "Click here to open the Java (JUnit) IDE"
document.getElementById('open-edit-challenge').addEventListener('click', () => {
    // Ẩn challenge-section
    document.getElementById('challenge-section').style.display = 'none';
    
    // Hiển thị edit-challenge-section
    document.getElementById('edit-challenge-section').style.display = 'block';
});

// Xử lý khi click vào nút "Update custom challenge" để quay lại challenge-section
document.getElementById('back-to-challenge').addEventListener('click', () => {
    // Ẩn edit-challenge-section
    document.getElementById('edit-challenge-section').style.display = 'none';
    
    // Hiển thị challenge-section
    document.getElementById('challenge-section').style.display = 'block';
});
