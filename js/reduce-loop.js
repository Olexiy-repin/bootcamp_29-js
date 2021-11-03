'use strict';
/*
 * ================ Метод reduce() ================ *
 */

// массив.reduce((previousValue, element, index, array) => {
// Тело коллбек-функции
// }, initialValue);

//? TASK 01
// Посчитаем сумму массива чисел

// const numbers = [1, 2, 3, 4, 5];

// const totalSum = numbers.reduce((prevValue, num, idx, arr) => {
//   if (idx === arr.length - 1) {
//     return (prevValue + num) / idx;
//   } else {
//     return prevValue + num;
//   }
// }, 0);

// console.log(totalSum);

//? TASK 02
// Создадим новый массив в котором каждый элемент из исходного умноженный на 2
// const numbers = [29.76, 41.85, 46.5];
// const doubled;

// console.log(doubled);

//? TASK 03
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

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

// const getTotalAmount = cars => {
//   return cars.reduce((prevValue, car) => {
//     return prevValue + car.amount;
//   }, 0);
// };

// console.log(getTotalAmount(cars));
