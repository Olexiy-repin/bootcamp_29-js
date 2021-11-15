'use strict';

import { randomColor } from './generateRandomColor';
import throttle from 'lodash/throttle';

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

let counter = 0;
const animatedSection = document.querySelector('.animated-section');

const animatedSectionByScroll = () => {
  counter += 1;

  console.log('Обработчик сработал: ', counter, ' раз');

  console.log('Растояние от верхней границы окна: ', window.pageYOffset);

  if (window.pageYOffset > 800) {
    animatedSection.classList.add('active');
    window.removeEventListener('scroll', throtledAnimatedSectionByScroll);
  }
};

export const throtledAnimatedSectionByScroll = throttle(animatedSectionByScroll, 300);
