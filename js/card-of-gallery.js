'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryEL = document.querySelector('.js-gallery');

// Создание li
const galleryItemEl = document.createElement('li');
galleryItemEl.classList.add('gallery-item');

// Создание a
const galleryLinkEl = document.createElement('a');
galleryLinkEl.href = '#';

galleryItemEl.append(galleryLinkEl);

// Создание img
const galleryImgEl = document.createElement('img');
galleryImgEl.src = 'https://picsum.photos/id/237/200/300';
galleryImgEl.alt = 'Labrador';

galleryLinkEl.append(galleryImgEl);

// Вставка элементов
galleryEL.append(galleryItemEl);
