'use strict';
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');
const openModalBtnsEl = document.querySelectorAll('.js-modal-open');

const onOpenBtnClick = () => {
  window.addEventListener('keydown', onModalCloseByEscPress);
  backdropEl.classList.add('is-open');
};

const closeModal = () => {
  window.removeEventListener('keydown', onModalCloseByEscPress);
  backdropEl.classList.remove('is-open');
};

const onModalCloseByEscPress = function (event) {
  if (event.code === 'Escape') {
    console.log('Нажата клавиша escape');
    closeModal();
  }
};

openModalBtnsEl.forEach(button => {
  button.addEventListener('click', onOpenBtnClick);
});

closeModalBtnEl.addEventListener('click', closeModal);
