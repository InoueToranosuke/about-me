document.addEventListener("DOMContentLoaded", function() {
    // 1. ヘッダーのスクロール効果
    const header = document.querySelector(".page-header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#333";
            header.style.transition = "background-color 0.3s ease";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });

    // 2. メインコンテンツのフェードイン効果
    const mainText = document.querySelector(".maintext");
    mainText.style.opacity = 0;
    mainText.style.transform = "translateY(20px)";
    window.addEventListener("load", function() {
        mainText.style.transition = "opacity 1s ease, transform 1s ease";
        mainText.style.opacity = 1;
        mainText.style.transform = "translateY(0)";
    });

    // 3. フッターに現在の年を表示
    const footerYear = document.querySelector(".footer p");
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Your Company Name. All rights reserved.`;
});
