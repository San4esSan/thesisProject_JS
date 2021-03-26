const accordeon = () => {
  const element = document.querySelectorAll('.element');

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
};

export default accordeon;