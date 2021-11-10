'use strict';
/*
 * События элементов форм. focus, blur, change, input
 */

const usernameInputEl = document.querySelector('.js-username-input');
const usernameOutputEl = document.querySelector('.js-policy-label span');
const policyCheckboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');

// usernameInputEl.addEventListener('focus', event => {
//   event.currentTarget.style.outlineColor = 'yellowgreen';
// });

// usernameInputEl.addEventListener('blur', event => {
//   event.currentTarget.style.cssText = 'outline: 2px solid tomato';
// });

usernameInputEl.addEventListener('input', event => {
  usernameOutputEl.textContent = event.currentTarget.value;
});

policyCheckboxEl.addEventListener('change', event => {
  console.dir(event.currentTarget.checked);
  //   1 вариант
  //   event.currentTarget.checked ? (submitBtnEl.disabled = false) : (submitBtnEl.disabled = true);

  //   2 вариант
  //   if (event.currentTarget.checked) {
  //     submitBtnEl.disabled = false;
  //   } else {
  //     submitBtnEl.disabled = true;
  //   }

  // 3 вариант
  submitBtnEl.disabled = !event.currentTarget.checked;
});
