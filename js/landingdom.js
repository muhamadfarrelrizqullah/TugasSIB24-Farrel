document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('carousel');
    const slider = carousel.querySelector('#logoslider');
    const slides = slider.querySelectorAll('li');
    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    
    // menggerakkan slider ke slide dengan indeks tertentu
    function moveToSlide(index) {
        if (index < 0 || index >= 4) return;

        currentIndex = index;
        const offset = -slideWidth * currentIndex;
        slider.style.transform = `translateX(${offset}px)`;
    }

    // menggeser slider ke slide berikutnya
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= 4) {
            currentIndex = 0;
        }
        moveToSlide(currentIndex);

        if (currentIndex === 4 - 1) {
            slider.classList.add('reversed');
            setTimeout(() => {
                slider.classList.remove('reversed');
            }, 0);
        }
    }

    // menggeser slider ke slide sebelumnya
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 4 - 1;
        }
        moveToSlide(currentIndex);
    }
    setInterval(nextSlide, 2000);
});