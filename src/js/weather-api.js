'use strict';

const BASE_URL = 'https://api.weatherbit.io/v2.0/current';
const API_KEY = '0c308e07df2c4b958a82213306091089';

export const fetchWeatherByCityName = cityName => {
  return fetch(`${BASE_URL}?key=${API_KEY}&city=${cityName}&lang=uk`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
