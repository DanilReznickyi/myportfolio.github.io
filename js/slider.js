document.addEventListener('DOMContentLoaded', function() {
      const images = document.querySelectorAll('.slider_image');
      const prevBtn = document.querySelector('.prev_btn');
      const nextBtn = document.querySelector('.next_btn');
      let currentSlide = 0;
      let slideInterval;
    
      function showSlide(index) {
        images.forEach((img, i) => {
          img.classList.toggle('active', i === index);
        });
      }
    
      function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
      }
    
      function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showSlide(currentSlide);
      }
    
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
      });
    
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
      });
    
      function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
      }
    
      // автоперелистывание каждые 4 секунды
      slideInterval = setInterval(nextSlide, 4000);
    });
    