'use strict';
// const pictures = [
//   {
//     width: 280,
//     height: 186,
//     url: 'https://picsum.photos/id/0/280/186',
//     alt: 'laptop',
//   },
//   {
//     width: 280,
//     height: 186,
//     url: 'https://picsum.photos/id/1/280/186',
//     alt: 'developer',
//   },
//   {
//     width: 280,
//     height: 186,
//     url: 'https://picsum.photos/id/10/280/186',
//     alt: 'forest',
//   },
//   {
//     width: 280,
//     height: 186,
//     url: 'https://picsum.photos/id/100/280/186',
//     alt: 'beach',
//   },
//   {
//     width: 280,
//     height: 186,
//     url: 'https://picsum.photos/id/1000/280/186',
//     alt: 'mountain',
//   },
// ];
// const containerEl = document.querySelector('.container');
// const galleryEL = document.querySelector('.gallery');

// Создание Заголовка

// Создание li

// Создание a

// Создание img

// Вставка элементов

// Создание галереи через цикл for

// Создание галереи через map

class Counter {
  constructor(initialValue) {
    this.counterValue = initialValue;
  }

  increaseCounter(e) {
    e.preventDefault();
    counter.counterValue += 1;
    refs.initialValue.textContent = counter.counterValue;
  }

  decreaseCounter(e) {
    e.preventDefault();
    counter.counterValue -= 1;
    refs.initialValue.textContent = counter.counterValue;
  }
}

const refs = {
  incBtn: document.querySelector('[data-action="increment"]'),
  decBtn: document.querySelector('[data-action="decrement"]'),
  initialValue: document.querySelector('#value'),
};

const counter = {
  counterValue: 0,
  increaseCounter(e) {
    e.preventDefault();
    counter.counterValue += 1;
    refs.initialValue.textContent = counter.counterValue;
  },
  decreaseCounter(e) {
    e.preventDefault();
    counter.counterValue -= 1;
    refs.initialValue.textContent = counter.counterValue;
  },
};

refs.incBtn.addEventListener('click', counter.increaseCounter);
refs.decBtn.addEventListener('click', counter.decreaseCounter);
