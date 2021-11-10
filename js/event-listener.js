'use strict';
/* ========
 * Основы событий. Создание и удаление слушателей. Объект события
 */
/*
 ?- Именование колбеков для слушателей
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */
// https://picsum.photos/200/300

const containerEl = document.querySelector('.container');
const swapBtnEl = document.querySelector('.js-swaped-img');
const imgEl = document.querySelector('.js-img');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');

// const onClick = function () {
//   alert('На меня кликнули');
// };

// containerEl.addEventListener('click', onClick);
// handleSubjectEvent - handleSwapBtnClick
// subjectEventHandler - swapBtnClickHandler
// onSubjectEvent - onSwapBtnClick

// const onSwapBtnClick = function (event) {
//   console.log(event);
//   imgEl.src = 'https://picsum.photos/200/300';
//   imgEl.alt = 'random image';
// };

// const onRemoveBtnClick = function () {
//   swapBtnEl.removeEventListener('click', onSwapBtnClick);
// };

// swapBtnEl.addEventListener('click', onSwapBtnClick);
// removeListenerBtnEl.addEventListener('click', onRemoveBtnClick);
