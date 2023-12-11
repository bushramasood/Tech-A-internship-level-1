document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlide);
});

let currentSlide = 1;

function slidechange(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const slides = document.querySelector('.slider').children;

  if (n > slides.length) {
    currentSlide = 1;
  } else if (n < 1) {
    currentSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide - 1].style.display = 'block';
}