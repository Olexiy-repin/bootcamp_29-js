'use strict';
import apiLocalStorage from './localstorage.js';

const formEl = document.querySelector('.js-contact-form');

const onFormInput = event => {
  apiLocalStorage.save(event.target.name, event.target.value);
};

const onFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.clear();
};

const fillEmailField = () => {
  const localStorageKeys = Object.keys(localStorage);

  for (const key of localStorageKeys) {
    if (formEl.elements[key]) {
      formEl.elements[key].value = apiLocalStorage.load(key);
    }
  }
};

fillEmailField();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', onFormInput);

// try {
//   const parsedSettings = JSON.parse('My, sdfsdf');
// } catch (error) {
//   console.error(error.name, error.message);
// }

// console.log('Hello');
