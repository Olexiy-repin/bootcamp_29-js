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

// const galleryEL = document.querySelector('.js-gallery');

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функция для создание карточки makeGalleryCard(cardInfo)
const makeGalleryCard = function ({ width, height, url, alt } = {}) {
  // Создание li
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('gallery-item');

  // Создание a
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  // Создание img
  const galleryImgEl = document.createElement('img');
  galleryImgEl.src = url;
  galleryImgEl.alt = alt;
  galleryImgEl.width = width;
  galleryImgEl.height = height;

  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

// Перебор коллекции карточек через map
const galleryItemElements = pictures.map(makeGalleryCard);

// Вставка коллекции карточек на страницу
galleryListEl.append(...galleryItemElements);
