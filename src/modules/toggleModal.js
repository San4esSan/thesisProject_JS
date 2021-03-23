const toggleModal = () => {
  const btnModal = document.querySelectorAll('.callback-btn'),
  modal = document.querySelector('.modal-callback'),
  modalOverlay = document.querySelector('.modal-overlay'),
  modalClose = document.querySelector('.modal-close');

  btnModal.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      modal.style.display = 'block';
      modalOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  });

  modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  });

};

export default toggleModal;