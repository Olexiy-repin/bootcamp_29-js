'use strict';

/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

// const fn = async () => {
//   const promise = new Promise((resolve, reject) => {
//     reject('error');
//   });

//   try {
//     const result = await promise;
//     console.log(result);

//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

// fn();

// (async () => {
//   const number = await fn();

//   console.log(number);
// })();

// fn()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const loadData = async () => {
  try {
    const postsResponse = await fetch(`${BASE_URL}/posts`);
    const usersResponse = await fetch(`${BASE_URL}/users`);

    if (!postsResponse.ok) {
      throw new Error(postsResponse.status);
    }

    if (!usersResponse.ok) {
      throw new Error(usersResponse.status);
    }

    const postsData = postsResponse.json();
    const usersData = usersResponse.json();

    const resultArr = await Promise.all([postsData, usersData]);

    console.log(resultArr);
  } catch (err) {
    console.log(err);
  }
};

// loadData();

//?
// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchUserById = async id => {
//   const response = await fetch(`${BASE_URL}/posts/${id}`);
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   const data = await response.json();

//   return data;
// };

// const logData = async () => {
//   try {
//     const data = await fetchUserById(1);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// logData();

//? TASK 01
// Перепеши на async/await

async function loadPosts(url) {
  const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }

  return await response.json();

  //   return .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }

  // return response.json();
}

// (async () => {
//   console.log(await loadPosts('https://jsonplaceholder.typicode.com/posts'));
// })();

// loadPosts('https://jsonplaceholder.typicode.com/posts')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then(result => {
//     console.log(result);
//   });
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();
