'use strict';
import axios from 'axios';

const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = query => {
  let page = Number(localStorage.getItem('page'));

  return axios.get(`${BASE_URL}/search/photos`, {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 10,
      order_by: 'latest',
    },
  });
};
