'use strict';
// https://unsplash.com/

import { fetchImages } from './unsplash-api';
import galleryCardsTemplate from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtn = document.querySelector('.js-load-more');

const clearGallery = () => {
  galleryEl.innerHTML = '';
};

const showLoadMoreBtn = () => {
  loadMoreBtn.classList.remove('is-hidden');
};

const increasePageInLocalStorage = () => {
  const pageIterattor = Number(localStorage.getItem('page')) + 1;
  localStorage.setItem('page', JSON.stringify(pageIterattor));
};

const onFormSubmit = async event => {
  event.preventDefault();

  localStorage.setItem('page', '1');

  const query = event.target.elements['user-search-query'].value;
  localStorage.setItem('query', query);

  clearGallery();

  try {
    const { data } = await fetchImages(query);

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
    increasePageInLocalStorage();
    showLoadMoreBtn();
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async () => {
  const query = localStorage.getItem('query');

  try {
    const { data } = await fetchImages(query);

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
    increasePageInLocalStorage();
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
