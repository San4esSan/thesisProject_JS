const toForm = () => {
  const form = document.querySelector('.form-callback');
  console.log('form: ', form);

  const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  };

  const toString = (str) => {
    return str
    .replace(/-+/g, '-')
    .replace(/ +/g, ' ')
    .replace(/^ +/gm, '')
    .replace(/^\++/gm, '+')
    .replace(/^-/g, '')
    .replace(/-$/g, '');
  };

  const validateElem = (elem) => {

    switch (elem.name) {      
      case 'fio':
        elem.value = toTitleCase(elem.value);
        elem.value = toString(elem.value);
      break;
      case 'tel':
        elem.value = toString(elem.value);
      break;
    }
  };

  const inputRestriction = (elem) => {
    if(elem.name === 'fio'){
      elem.value = elem.value.replace(/[^а-я\s-]/ig, '');      
    }
    if(elem.name === 'tel'){
      elem.value = elem.value.replace(/(?!^[+])[^0-9.]/, '');
    }
  };

  const elementsForm = [];

  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    elementsForm.forEach(elem => {
      if(!elem.value){
        elem.style = 'border: 5px solid red;';
      } else {
        elem.style.border = 'none';
      }     
    });
  });

  for(let elem of form.elements){
    if(elem.tagName !== 'BUTTON'){
      elementsForm.push(elem);
      elem.addEventListener('input', () => {
        inputRestriction(elem);
      });
      elem.addEventListener('blur', () => {
        validateElem(elem);
      });  
    }
  }

}
export default toForm;