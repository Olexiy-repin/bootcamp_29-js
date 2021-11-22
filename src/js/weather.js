// https://www.weatherbit.io/api
'use strict';
import weatherCardTemplate from '../templates/weather-card.hbs';
import { fetchWeatherByCityName } from './weather-api';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherCardsWrapperEl = document.querySelector('.weather__wrapper');

const renderWeatherCard = weatherData => {
  weatherCardsWrapperEl.innerHTML = weatherCardTemplate(weatherData.data[0]);
};

const fetchWeatherData = event => {
  event.preventDefault();
  const city = event.currentTarget.querySelector('.js-search-input').value;

  fetchWeatherByCityName(city)
    .then(weatherData => {
      renderWeatherCard(weatherData);
    })
    .catch(error => {
      console.log(error);
    });
};

weatherFormEl.addEventListener('submit', fetchWeatherData);
