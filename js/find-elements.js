'use strict';
// Объект window и document

// Дедовские методы поиска элементов (getElementBy...)
// const mainTitleEl = document.getElementsByTagName('h1');
// console.log(mainTitleEl);

// const listEl = document.getElementsByClassName('list');
// console.log(listEl);

// const listItemEl = document.getElementsByClassName('list__item');
// console.log(listItemEl);

// Современные методы поиска элементов (querySelector)
// const mainTitleEl = document.querySelector('h1');
// console.log(mainTitleEl);

// const listEl = document.querySelector('.list');
// console.log(listEl);

// const listItemEl = document.querySelectorAll('.list__item');
// console.log(listItemEl);

// const listLinkEl = listItemEl[2].querySelector('[href="#"]');
// console.log(listLinkEl);

// Навигации по DOM дереву

// const listEl = document.querySelector('.list');

// console.log(listEl.querySelectorAll('.list__item').length);
// console.log(listEl.children.length);
