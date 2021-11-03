'use strict';
/*
 * ================ Метод sort() ================ *
 */

// Сортировка чисел и строк по умолчанию
// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort();

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger'];
// const sortedWords = [...words].sort();

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

// Сортировка чисел и строк по условию

// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => {
//   return a - b;
// });

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger'];
// const sortedWords = [...words].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

//? TASK 01
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный
// по возврастанию значения свойства amount.

// const sortByAscendingAmount = cars => {
//   const newArr = [...cars];
//   return newArr.sort((a, b) => a.amount - b.amount);
// };

// console.table(sortByAscendingAmount(cars));

//? TASK 02
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный
// по убыванию значения свойства price.

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => {
//     return b.price - a.price;
//   });
// };

// console.table(sortByDescendingPrice(cars));

//? TASK 03
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели
// в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) => {
//   return [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     } else if (order === 'desc') {
//       return b.model.localeCompare(a.model);
//     }
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
