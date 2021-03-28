const accordeon = () => {
  const element = document.querySelectorAll('.accordeon .element');
  // const element = document.querySelector('.accordeon');

  element.forEach(elem => {
    elem.classList.remove('active');
  });

  element.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      if(item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        element.forEach(elem => {
          elem.classList.remove('active');
        });
        item.classList.add('active');
      }
    });
  });


    // element.addEventListener('click', (event) => {
    //   event.preventDefault();

    //   let target = event.target.closest('.element');
    //   console.log('target: ', target);
    //   if(target.classList.contains('active')){
    //     target.classList.remove('active');
    //   } else {
    //     if (!target.classList.contains('active')){
    //       target.classList.remove('active');
    //     }
    //     target.classList.add('active');
    //   }
      

    // });


};

export default accordeon;