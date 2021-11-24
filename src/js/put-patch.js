'use strict';
/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUser = (newInfo, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newInfo),
  };

  return fetch(`${BASE_URL}/users/${id}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

updateUser({ email: 'test@gmail.com' }, 4);
updateUser({ email: 'test@gmail.com' }, 5);
updateUser({ email: 'test@gmail.com' }, 6);
