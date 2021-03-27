const topSlider = () => {
  const itemSlide = document.querySelectorAll('.item'),
    table = document.querySelectorAll('.table');

    let slideIndex = 1;

    const showSlides = (n) => {
      if(n > itemSlide.length) {
        slideIndex = 1;
      }
      if(n < 1 ) {
        slideIndex = itemSlide.length;
      }

      itemSlide.forEach(item => {
        item.classList.add('animated');
        item.style.display = 'none';
      });
      itemSlide[slideIndex - 1].style.display = 'block';
      
      table.forEach(item => {
        item.classList.remove('active');
      });
      
    };
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    setInterval(function() {
      plusSlides(1);
      itemSlide[slideIndex - 1].classList.remove('fadeIn');
      itemSlide[slideIndex - 1].classList.add('fadeIn');
    }, 3000);

    setInterval(function() {
      table[slideIndex-1].classList.add('active');
    }, 3050);

};

export default topSlider;