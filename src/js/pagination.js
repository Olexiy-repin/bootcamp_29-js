'use strict';
// https://jsonplaceholder.typicode.com/
// let page = 0;

// const fetchComments = () => {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   page += 1;

//   fetch(`${BASE_URL}/comments/?_limit=100&_page=${page}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     })
//     .then(data => console.log(data));
// };

// document.addEventListener('click', fetchComments);
