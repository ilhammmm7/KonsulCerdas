// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.classList.remove("active"));
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
    }

    document.querySelector(".prev").addEventListener("click", function() {
        showSlide(slideIndex -= 1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        showSlide(slideIndex += 1);
    });

    function showSlide(n) {
        let slides = document.querySelectorAll(".slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        slides.forEach(slide => slide.classList.remove("active"));
        slides[slideIndex - 1].classList.add("active");
    }
});