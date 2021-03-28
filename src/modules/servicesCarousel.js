const servicesCarousel = () => {

  class SliderCarousel{
    constructor({
      main,
      wrap,
      next,
      prev,
      position = 0,
      slidesToShow = 3
    }){
      if(!main || !wrap){
        console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!' );
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow
      };
    }

    init(){
      this.addGloClass();
      this.addStyle();

      if(this.prev && this.next){
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
    }

    addGloClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');
      for(const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }

    addStyle(){
      const style = document.createElement('style');
      style.id = 'sliderCarousel-style';
      style.textContent =`
        .glo-slider{
          overflow: hidden !important;
        }
        .glo-slider__wrap{
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item{
          display: flex !important;
          align-items: center;
          justify-content: center;
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
      `;

      document.head.appendChild(style);
    }

    controlSlider(){
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    
    prevSlider(){
      if(this.options.infinity || this.options.position > 0){
        --this.options.position;
        if(this.options.position < 0){
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    
    nextSlider(){
      if(this.options.infinity || this.options.position < this.options.maxPosition){
        ++this.options.position;
        if( this.options.position > this.options.maxPosition){
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }

    addArrow(){
      this.prev = document.querySelector('.arrow-left');
      this.next = document.querySelector('.arrow-right');
    }

  }

  const carousel = new SliderCarousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    prev: '#test-left',
    next: '.arrow-right',
    slidesToShow: 3
  });

  carousel.init();

};

export default servicesCarousel;