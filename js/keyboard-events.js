'use strict';
/*
 * События клавиатуры. keypress, keydown, keyup
 */
const outputEl = document.querySelector('.js-output');

const windowPressKey = function (event) {
  outputEl.insertAdjacentHTML('beforeend', `key: ${event.key}; code: ${event.code} <br><hr>`);
};

window.addEventListener('keydown', windowPressKey);
