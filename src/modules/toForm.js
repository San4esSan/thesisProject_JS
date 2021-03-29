const toForm = () => {
  const form = document.querySelector('.form-callback');

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
        if(elem.value.length > 2){
          elem.value = toTitleCase(elem.value);
          console.log('elem.value: ', elem.value.length);
          elem.value = toString(elem.value);
          elem.style.border = 'none';
        } else {
          elem.value = '';
          elem.style = 'border: 5px solid red;';
          if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
          }
          const errorDiv = document.createElement('div');
          errorDiv.textContent = 'Имя должно быть не менее 3 символов';
          errorDiv.classList.add('validator-error');
          elem.insertAdjacentElement('afterend', errorDiv);
        }
      break;
      case 'tel':
        if(elem.value.length > 6 && elem.value.length < 14){
          elem.value = toString(elem.value);
          elem.style.border = 'none';
        } else {
          elem.value = '';
          elem.style = 'border: 5px solid red;';
          if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
          }
          const errorDiv = document.createElement('div');
          errorDiv.textContent = 'Телефон должен быть от 7 до 13 символов';
          errorDiv.classList.add('validator-error');
          elem.insertAdjacentElement('afterend', errorDiv);
        }
      break;
    }
  };

  const inputRestriction = (elem) => {
    if(elem.name === 'fio'){
      elem.value = elem.value.replace(/[^а-я]/ig, '');      
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

  const applyStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
      input.success {
        border: 2px solid green;
        margin-bottom: 0
      }
      input.error {
        border: 2px solid red;
        margin-bottom: 0
      }
      .validator-error {
        font-size: 12px;
        font-family: sans-serif;
        color: red
      }
    `;
    document.head.appendChild(style);
  };
  applyStyle();
  

}
export default toForm;