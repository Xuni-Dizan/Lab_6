// Xử lý khi click vào nút "Continue" trong card
document.querySelectorAll('.continue').forEach((button) => {
    button.addEventListener('click', () => {
        // Ẩn tất cả các card
        document.querySelectorAll('.card-container').forEach((card) => {
            card.style.display = 'none';
        });

        // Hiển thị form-container
        document.getElementById('form-container').style.display = 'block';
    });
});

// Xử lý khi click vào nút "X" trong form-container để quay lại card-container
document.getElementById('close-form-container').addEventListener('click', () => {
    // Ẩn form-container
    document.getElementById('form-container').style.display = 'none';
    
    // Hiển thị lại card-container
    document.querySelector('.card-container').style.display = 'grid';
});

// Xử lý khi click vào nút "X" trong edit-challenge-section để quay lại challenge-section
document.getElementById('close-edit-challenge').addEventListener('click', () => {
    // Ẩn edit-challenge-section
    document.getElementById('edit-challenge-section').style.display = 'none';
    
    // Hiển thị lại challenge-section
    document.getElementById('challenge-section').style.display = 'block';

    // Ẩn card-container
    document.querySelector('.card-container').style.display = 'grid';

    // Hiển thị form-container trong challenge-section (nếu cần)
    document.getElementById('form-container').style.display = 'none'; // Đảm bảo form-container không hiển thị
});

// Xử lý khi click vào liên kết "Click here to open the Java (JUnit) IDE"
document.getElementById('open-edit-challenge').addEventListener('click', () => {
    // Ẩn challenge-section
    document.getElementById('challenge-section').style.display = 'none';
    
    // Ẩn card-container trong challenge-section
    document.querySelector('.card-container').style.display = 'none';

    // Hiển thị edit-challenge-section
    document.getElementById('edit-challenge-section').style.display = 'block';
});

// Xử lý khi click vào nút "Update custom challenge" để quay lại challenge-section
document.getElementById('btn')?.addEventListener('click', () => {
    // Ẩn edit-challenge-section
    document.getElementById('edit-challenge-section').style.display = 'none';
    
    // Hiển thị challenge-section
    document.getElementById('challenge-section').style.display = 'block';

    // Hiển thị lại card-container
    document.querySelector('form-container').style.display = 'block';
});
