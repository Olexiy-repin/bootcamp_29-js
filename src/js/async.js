'use strict';
/*
 * Синхронный vs Асинхронный JS
 */

// Стек вызова функций

// Фунции отложенного вызова window.setTimeout(callback, delay, arg1, arg2, ...);
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// const showMessage = name => {
//   console.log(`Hello ${name}`);
// };

// const timeoutId = setTimeout(showMessage, 4, 'Oleksii');

// clearTimeout(timeoutId);
// window.document.addEventListener('click', () => {
//   clearTimeout(timeoutId);
// });

// window.setInterval(callback, delay, arg1, arg2, ...)

// Очистка интервалов и таймаутов clearInterval(intervalID), clearTimeout(timeoutID)
