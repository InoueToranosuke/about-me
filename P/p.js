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

    // 2. 画像のフェードインエフェクト
    const teaImage = document.querySelector(".tea");
    teaImage.style.opacity = 0;
    teaImage.style.transform = "translateY(20px)";
    window.addEventListener("load", function() {
        teaImage.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        teaImage.style.opacity = 1;
        teaImage.style.transform = "translateY(0)";
    });

    // 3. 名前のホバーエフェクト
    const nameElement = document.querySelector(".myName");
    nameElement.addEventListener("mouseover", function() {
        nameElement.style.transform = "scale(1.1)";
        nameElement.style.transition = "transform 0.3s ease";
    });
    nameElement.addEventListener("mouseout", function() {
        nameElement.style.transform = "scale(1)";
    });

    // 4. テキストボックスのフェードインエフェクト
    const textbox = document.querySelector(".textbox");
    textbox.style.opacity = 0;
    textbox.style.transform = "translateY(20px)";
    window.addEventListener("load", function() {
        textbox.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        textbox.style.opacity = 1;
        textbox.style.transform = "translateY(0)";
    });
});
