'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

const galleryListEL = document.querySelector('.js-gallery');
const galleryItemEL = galleryListEL.firstElementChild;
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

// galleryItemEL.innerHTML = '<span>some text <a href="#">link</a></span>';

// galleryItemEL.insertAdjacentHTML('afterbegin', '<span>some text <a href="#">link</a></span>');

const makeItemCardMarkup = function ({ width, height, url, alt } = {}) {
  return `
  <li class="gallery-item">
    <a href="#">
      <img src="${url}" alt="${alt}" width="${width}" height="${height}">
    </a>
  </li>
  `;
};

const galleryItemElements = pictures.map(makeItemCardMarkup).join('');
console.log(galleryItemElements);

// galleryListEL.innerHTML = galleryItemElements;
galleryListEL.insertAdjacentHTML('beforeend', galleryItemElements);
