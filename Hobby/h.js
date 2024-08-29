document.addEventListener("DOMContentLoaded", function() {
    // 1. ヘッダーのスクロールエフェクト
    const header = document.querySelector(".page-hedder");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#333";
            header.style.transition = "background-color 0.3s ease";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });

    // 2. 画像とテキストのフェードインエフェクト
    const fadeElements = document.querySelectorAll(".text-container, .pc, .gameimg img, .moving img, .moving2 img, .bookimg img");
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
    });

    window.addEventListener("load", function() {
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = "opacity 1s ease, transform 1s ease";
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }, index * 200);  // 少しずつ遅れてフェードイン
        });
    });

    // 3. イメージホバーエフェクト
    const images = document.querySelectorAll(".gameimg img, .moving img, .moving2 img, .bookimg img");
    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.05)";
            image.style.transition = "transform 0.3s ease";
        });
        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });
    });
});
