const sendForm = () => {
  const errorMassage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
  const form = document.querySelector('.form-callback');
  const inputs = document.querySelectorAll('input');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';
  statusMessage.style.color = 'red';
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.appendChild(statusMessage);

    statusMessage.textContent = loadMessage;
    
    const formData = new FormData(form);

    const clearInputs = () => {
      inputs.forEach(item => {
        if(inputs.classList === 'BUTTON'){
          item.value = '';
        }
      });
    };

    let body = {};
    formData.forEach((val, key) =>{
      body[key] = val;
    });        
    postData(body)
    // postData(formData)
    .then((response) => {
      event.preventDefault();
      if(response.status !==200){
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      setTimeout(() => document.querySelector('.popup').style.display = 'none', 3000);
    })
    .catch((error) => {
      statusMessage.textContent = errorMassage;
      console.log(error);
    })
    .finally(() => {
      clearInputs();
      setTimeout(() => statusMessage.remove(), 3000);
    });

  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(body)
      // body: formData
    });
  };   
};

export default sendForm;