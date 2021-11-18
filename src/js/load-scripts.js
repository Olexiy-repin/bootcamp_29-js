'use strict';

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Загрузка скрипта
 */
//? Создайте функция loadScript(url), которая будет создавать и вставлять скрипт на страницу
// const loadScript = (url, callback) => {
//   const script = document.createElement('script');
//   script.src = url;

//   script.addEventListener('load', () => {
//     callback(script);
//   });
//   script.addEventListener('error', () => {
//     const fetchError = new Error(`${script.src} не загружен`);
//     callback(null, fetchError);
//   });

//   document.body.append(script);
// };

// const handleFetchScript = (script, error) => {
//   if (script) {
//     console.log(`${script.src} успешно загружен`);
//   } else {
//     console.log(error);
//   }
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', (script, error) => {
//   if (script) {
//     console.log(`${script.src} успешно загружен`);
//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       (script, error) => {
//         if (script) {
//           console.log(`${script.src} успешно загружен`);
//           loadScript(
//             'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//             (script, error) => {
//               if (script) {
//                 console.log(`${script.src} успешно загружен`);
//               } else {
//                 console.log(error);
//               }
//             }
//           );
//         } else {
//           console.log(error);
//         }
//       }
//     );
//   } else {
//     console.log(error);
//   }
// });

//? Передайте кобэк, который буде вызываться по завершению загрузки скрипта

//? Обработка ошибок

//? Загрузка нескольких скриптов

//? Адская пирамида колбэков

//? Решение через промисы
// const loadScript = (url, callback) => {
//   const script = document.createElement('script');
//   script.src = url;

//   script.addEventListener('load', () => {
//     callback(script);
//   });
//   script.addEventListener('error', () => {
//     const fetchError = new Error(`${script.src} не загружен`);
//     callback(null, fetchError);
//   });

//   document.body.append(script);
// };

// const loadScript = url => {
//   const script = document.createElement('script');
//   script.src = url;

//   const promise = new Promise((resolve, reject) => {
//     script.addEventListener('load', () => {
//       resolve(script);
//     });
//     script.addEventListener('error', () => {
//       const fetchError = new Error(`${script.src} не загружен`);
//       reject(fetchError);
//     });
//   });

//   document.body.append(script);

//   return promise;
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(script => {
//     console.log(`${script.src} успешно загружен`);
//     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
//   })
//   .then(script => {
//     console.log(`${script.src} успешно загружен`);
//     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
//   })
//   .then(script => {
//     console.log(`${script.src} успешно загружен`);
//   })
//   .catch(error => {
//     console.log(error);
//   });
