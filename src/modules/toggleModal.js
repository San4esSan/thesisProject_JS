const toggleModal = () => {
  const btnModal = document.querySelectorAll('.callback-btn'),
    btnServices = document.querySelector('.button-services'),
    modal = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalClose = document.querySelector('.modal-close'),
    elemCart = document.querySelector('.services-carousel');

  const openModal = () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  };

  elemCart.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target.closest('.element');
    if(target.classList.contains('element')){
      openModal();
    }
  });

  btnModal.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      openModal();
    });
  });

  btnServices.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
  });

  modalClose.addEventListener('click', () => {
    closeModal();
  });

  modalOverlay.addEventListener('click', () => {
    closeModal();
  });
  
};

export default toggleModal;