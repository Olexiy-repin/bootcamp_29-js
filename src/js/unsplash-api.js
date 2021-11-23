'use strict';

const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = query => {
  let page = Number(localStorage.getItem('page'));
  page += 1;

  return fetch(
    `${BASE_URL}/search/photos?client_id=${API_KEY}&query=${query}&page=${page}&per_page=10`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
