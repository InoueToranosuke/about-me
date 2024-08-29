// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.page-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#333'; // スクロールすると背景色が変わる
        } else {
            header.style.backgroundColor = 'transparent'; // スクロール前の背景色
        }
    });
});
// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input, textarea');

    function checkFormValidity() {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });
        submitButton.disabled = !isValid;
        submitButton.style.cursor = isValid ? 'pointer' : 'not-allowed';
        submitButton.style.backgroundColor = isValid ? '#333' : '#888';
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });

    // 初期状態でのチェック
    checkFormValidity();
});
// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const mainText = document.querySelector('.maintext');
    
    setTimeout(() => {
        mainText.style.opacity = 1;
        mainText.style.transform = 'translateY(0)';
    }, 300); // ページロード後にアニメーション開始
});
// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    alert('ページが読み込まれました！');
});
