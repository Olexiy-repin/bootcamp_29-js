'use strict';
/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

fetch(`${BASE_URL}/users/11`, {
  method: 'DELETE',
})
  .then(r => r.json())
  .then(console.log);
