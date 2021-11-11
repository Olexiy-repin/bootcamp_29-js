'use strict';
/*
 * Распространение событий (погружение, определение целевого элемента, всплытие)
 */

const textEl = document.querySelector('.text');
const divEl = document.querySelector('.div');
const sectionEl = document.querySelector('.section');

const onSectionClick = event => {
  console.log('Слушатель клика на секции, Фаза погружения');
  console.log('Current target ->', event.currentTarget);
  console.log('Target ->', event.target);
};

// sectionEl.addEventListener('click', onSectionClick, { capture: true });

// divEl.addEventListener(
//   'click',
//   event => {
//     console.log('Слушатель клика на div, Фаза погружения');
//     console.log('Current target ->', event.currentTarget);
//     console.log('Target ->', event.target);
//   },
//   { capture: true }
// );

// textEl.addEventListener(
//   'click',
//   event => {
//     console.log('Слушатель клика на p, Фаза погружения');
//     console.log('Current target ->', event.currentTarget);
//     console.log('Target ->', event.target);
//   },
//   { capture: true }
// );

sectionEl.addEventListener(
  'click',
  event => {
    console.log('Слушатель клика на секции, Фаза всплытия');
    console.log('Current target ->', event.currentTarget);
    console.log('Target ->', event.target);
  },
  { once: true }
);

divEl.addEventListener('click', event => {
  console.log('Слушатель клика на div, Фаза всплытия');
  console.log('Current target ->', event.currentTarget);
  console.log('Target ->', event.target);
});

textEl.addEventListener('click', event => {
  console.log('Слушатель клика на p, Фаза всплытия');
  console.log('Current target ->', event.currentTarget);
  console.log('Target ->', event.target);
});
