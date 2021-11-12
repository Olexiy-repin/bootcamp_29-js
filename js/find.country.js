'use strict';
const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputEl = document.querySelector('.search-input');
const outputError = document.querySelector('.output-error');
const countryCardEl = document.querySelector('.country-card');

let counter = 0;

const appendInfoAboutCountry = ({ name, capital, population, area }) => {
  outputError.textContent = '';
  const markup = `<li class="country-card__item"><strong>Страна:</strong> ${name}</li>
    <li class="country-card__item"><strong>Столица:</strong> ${capital}</li>
    <li class="country-card__item"><strong>Население:</strong> ${population}</li>
    <li class="country-card__item"><strong>Площадь:</strong> ${area}км<sup>2</sup></li>`;

  countryCardEl.innerHTML = markup;
};

const onSearch = event => {
  counter += 1;
  console.log('Обработчик сработал ', counter, ' раз');

  if (event.target.value.replaceAll(' ', '') === '') {
    outputError.textContent = '';
    countryCardEl.innerHTML = '';
    return;
  }

  const findedCountry = countries.find(
    country => country.name.toLowerCase() === event.target.value.toLowerCase()
  );

  if (!findedCountry) {
    outputError.textContent = 'Такой страны нет';
    countryCardEl.innerHTML = '';
    return;
  }

  appendInfoAboutCountry(findedCountry);
};

searchInputEl.addEventListener('input', _.debounce(onSearch, 300));
