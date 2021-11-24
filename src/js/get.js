'use strict';
/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

const fetchUsers = id => {
  return fetch(`${BASE_URL}/users/${id}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

fetchUsers(5)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
