const scrolling = () => {
  const up = document.querySelector('.up'),
    anchors = document.querySelectorAll('.top-menu a[href*="#"]');
  let scrolled;
  let timer;

  up.addEventListener('click', () => {
    scrolled = window.pageYOffset;
    scrollToTop();
  });

  function scrollToTop(){
    if(scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 10);
    } else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }

  window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 500) {
      up.style.display = 'block';
      up.classList.add('animated', 'fadeIn');
      up.classList.remove('fadeOut');
    } else {
      up.classList.add('fadeOut');
      up.classList.remove('fadeIn');
    }
  });

  anchors.forEach(elem => {
    if(anchors) {
      elem.addEventListener('click', function(event) {
        event.preventDefault();
        let anchorsId = this.getAttribute('href');
        document.querySelector(anchorsId).scrollIntoView({
          behavior: 'smooth', block: 'start'
        });
      });
    }
  })

};

export default scrolling;