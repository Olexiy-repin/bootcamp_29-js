'use strict';
/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const newUser = {
  name: 'Nina Reyes',
  username: 'Reyes',
  email: 'test@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
};

fetch(`${BASE_URL}/users`, options)
  .then(r => r.json())
  .then(console.log);
