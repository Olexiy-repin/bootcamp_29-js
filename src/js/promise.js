'use strict';

/*
 * Промисы
 */
//? Пример с агенством на колбеках
// const agency = function (onSuccess, onError) {
//   console.log('Начинаем печатать новый выпуск.');
//   let flag;

//   setTimeout(() => {
//     flag = true;

//     if (flag) {
//       const result = 10;
//       onSuccess(result);
//     } else {
//       onError('Сломалась печатная машина');
//     }
//   }, 2000);
// };

// const onSuccess = message => {
//   console.log(message);
// };

// const onError = error => {
//   console.log(error);
// };

// agency(onSuccess, onError);

//? конструктор new Promise(callback(resolve, reject));
// const promise = new Promise((resolve, reject) => {
//   let flag;

//   setTimeout(() => {
//     flag = true;

//     if (flag) {
//       resolve('Done');
//     } else {
//       reject('Error');
//     }
//   }, 1000);
// });

//? then(onSuccess, onError)
// promise
//   .then(message => {
//     console.log(message);

//     return message;
//   })
//   .then(result => {
//     console.log(result + '!!!');
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Все закончилось');
//   });

//? цепочка промисов и catch(onError)

//? finally()

//? Пример с агенством на промисах
// const agency = function (onSuccess, onError) {
//   console.log('Начинаем печатать новый выпуск.');
//   let flag;

//   setTimeout(() => {
//     flag = true;

//     if (flag) {
//       const result = 10;
//       onSuccess(result);
//     } else {
//       onError('Сломалась печатная машина');
//     }
//   }, 2000);
// };

// const onSuccess = message => {
//   console.log(message);
// };

// const onError = error => {
//   console.log(error);
// };

// agency(onSuccess, onError);

// const agency = new Promise((resolve, reject) => {
//   console.log('Начинаем печатать новый выпуск.');
//   let flag;

//   setTimeout(() => {
//     flag = false;

//     if (flag) {
//       const result = 10;
//       resolve(result);
//     }

//     reject('Сломалась печатная машина');
//   }, 2000);
// });

// agency
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//? TASK 01
// Можно ли "перевыполнить" промис?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Что будет в консоли

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // 1
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//   });

//? TASK 03
// Что будет в консоли

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); //error
//   });
