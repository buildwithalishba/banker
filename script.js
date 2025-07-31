window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
            navbar.classList.add('scrolled');
    }
    else{
    navbar.classList.remove('scrolled');
    }
});


let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial');
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialDots = document.querySelectorAll('#dots .dot');

function updateTestimonialSlider() {
  testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}vw)`;

  testimonialDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonial);
  });
}

testimonialDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    updateTestimonialSlider();
  });
});




// nav bar
    function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }




 let current = 0;
  const slides = document.querySelectorAll('.slider_sec');
  const slidesWrapper = document.querySelector('.slides');

  function updateSlider() {
   let value =  slidesWrapper.style.transform = `translateX(-${current * 100}%)`;
    console.log(value)
  }

  function nextSlide() {
    if (current < slides.length - 1) {
      current++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (current > 0) {
      current--;
      updateSlider();
    }
  }



let currentTextIndex = 0;
const textSlidesWrapper = document.getElementById('textSlides');
const textDots = document.querySelectorAll('.maindot');

function updateTextSlider() {
  let value = textSlidesWrapper.style.transform = `translateX(-${currentTextIndex * 100}%)`;
    console.log(value)

  textDots.forEach(dot => dot.classList.remove('dot_active'));
  textDots[currentTextIndex].classList.add('dot_active');
}

function goToTextSlide(index) {
  currentTextIndex = index;
  updateTextSlider();
}


