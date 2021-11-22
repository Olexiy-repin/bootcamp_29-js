'use strict';
// https://jsonplaceholder.typicode.com/

// const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// console.log(fetchPosts);

//? TASK 01
// Создайте функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

// const BASE_URL = 'https://api.github.com/users';
// const userLogins = ['luxplanjay', 'olexiy-repin', 'salikovskyi'];

// const fetchedUsers = name => {
//   return fetch(`${BASE_URL}/${name}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// const getUsers = names => {
//   const usersData = [];

//   for (let i = 0; i < names.length; i += 1) {
//     usersData.push(fetchedUsers(names[i]));
//   }

//   return Promise.all(usersData);
// };

// getUsers(userLogins)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
