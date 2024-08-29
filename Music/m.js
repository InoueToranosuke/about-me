document.addEventListener("DOMContentLoaded", function() {
    // 1. ページ読み込み時のフェードインエフェクト
    const artists = document.querySelectorAll(".artist");
    artists.forEach(artist => {
        artist.style.opacity = 0;
        artist.style.transform = "translateY(20px)";
    });

    window.addEventListener("load", function() {
        artists.forEach((artist, index) => {
            setTimeout(() => {
                artist.style.transition = "opacity 1s ease, transform 1s ease";
                artist.style.opacity = 1;
                artist.style.transform = "translateY(0)";
            }, index * 200);  // 各アーティストが少し遅れてフェードイン
        });
    });

    // 2. ヘッダーのスクロールエフェクト
    const header = document.querySelector(".page-header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#333";
            header.style.transition = "background-color 0.3s ease";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });

    // 3. 画像ホバーエフェクト
    const images = document.querySelectorAll(".artist img");
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
