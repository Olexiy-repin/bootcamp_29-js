'use strict';

const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    element.style.backgroundColor = randomColor();
    element.dataset.color = randomColor();
  });
};

paintElements();

const onPalletElClick = event => {
  const palletElem = event.target.closest('.pallet__item');
  const outputColor = palletElem.querySelector('.pallet__item-color');
  const rgbColor = palletElem.dataset.color;

  outputColor.textContent = rgbColor;
};

palletEl.addEventListener('click', onPalletElClick);
