let currentSlide = 0;
let slideInterval;
const slideDuration = 5000; 


function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    
    startSlideShow();
    
    r
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', pauseSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);
}


function goToSlide(n) {
    currentSlide = n;
    updateSlider();
}


function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}


function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}


function updateSlider() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    
    resetSlideShow();
}


function startSlideShow() {
    slideInterval = setInterval(nextSlide, slideDuration);
}


function pauseSlideShow() {
    clearInterval(slideInterval);
}


function resetSlideShow() {
    pauseSlideShow();
    startSlideShow();
}


document.addEventListener('DOMContentLoaded', initSlider);