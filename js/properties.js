'use strict';
// Аттрибуты как свойства объекта
// const mainTitleEl = document.querySelector('.js-main-title');
// mainTitleEl.textContent = 'New title';
// console.log(mainTitleEl.textContent);

// const descriptionEl = document.querySelector('.js-desc');
// descriptionEl.textContent = 'New description';
// console.log(descriptionEl.textContent);

// https://picsum.photos/id/1025/200/300

// const swapBtnEl = document.querySelector('[data-swap]');
// const pictureEl = document.querySelector('.js-img');

// swapBtnEl.addEventListener('click', () => {
//   pictureEl.src = 'https://picsum.photos/id/1025/200/300';
//   pictureEl.alt = 'mops';
// });

// Доступ к аттрибутам
/*
elem.hasAttribute(name) 
elem.getAttribute(name) 
elem.setAttribute(name, value)
elem.removeAttribute(name) 
elem.attributes
*/

// pictureEl.width = '400';
// pictureEl.setAttribute('width', '400');

// pictureEl.width;
// pictureEl.getAttribute('width');

// console.log(pictureEl.setAttribute('width', '400'));

// Data аттрибуты
console.log(swapBtnEl.dataset.resize);
