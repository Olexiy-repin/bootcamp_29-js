'use strict';
//? Запрос за пользавотелем на колбэках

// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Посылаю запрос за пользователем');
//   let flag;

//   setTimeout(() => {
//     flag = true;

//     if (flag) {
//       const result = {
//         firstName: name,
//         lastName: 'Richardson',
//         age: 30,
//       };

//       onSuccess(result);
//     } else {
//       onError('Пользователь с таким именем не найден');
//     }
//   }, 2000);
// };

// const handleSuccessFetch = result => {
//   console.log(result);
// };

// const handleErrorFetch = error => {
//   console.log(error);
// };

// fetchUserByName('Oleksii', handleSuccessFetch, handleErrorFetch);

//? Запрос за пользавотелем на промисах

// const fetchUserByName = name => {
//   const promise = new Promise((resolve, reject) => {
//     console.log('Посылаю запрос за пользователем');
//     let flag;

//     setTimeout(() => {
//       flag = false;

//       if (flag) {
//         const result = {
//           firstName: name,
//           lastName: 'Richardson',
//           age: 30,
//         };

//         resolve(result);
//       } else {
//         reject('Пользователь с таким именем не найден');
//       }
//     }, 2000);
//   });

//   return promise;
// };

// const handleSuccessFetch = result => {
//   console.log(result);
// };

// const handleErrorFetch = error => {
//   console.log(error);
// };

// fetchUserByName('Oleksii').then(handleSuccessFetch).catch(handleErrorFetch);
