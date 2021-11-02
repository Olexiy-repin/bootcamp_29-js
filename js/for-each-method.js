'use strict';
/* ============ forEach() как замена циклов for и for...of для массивов ============ */
// const numbers = [1, 2, 3, 4, 5];

// const sum = function (numbersArr) {
//   let total = 0;

//   // Через обычный for
//   //   for (let i = 0; i < numbersArr.length; i += 1) {
//   //     total += numbersArr[i];
//   //   }

//   // Через обычный for...of
//   //   for (const value of numbersArr) {
//   //     total += value;
//   //   }

//   // Через forEach();
// //   const totalSum = el => {
// //     total += el;
// //   };
//   numbersArr.forEach(el => {
//     total += el;
//   });

//   return total;
// };

// console.log(sum(numbers));

// TASK 01
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = function (items) {
//   console.log(items);

//   items.forEach((el, idx) => {
//     console.log(`${idx + 1} - ${el}`);
//   });

//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);
//   //   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// TASK 02
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const printContactsInfo = function ({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((el, idx) => {
//     console.log(`${el}: ${phoneList[idx]}`);
//   });
//   //   for (let i = 0; i < nameList.length; i += 1) {
//   //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   //   }
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// TASK 03
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const calсulateAverage = function (...args) {
//   let total = 0;

//   args.forEach(el => (total += el));

//   //   for (let i = 0; i < args.length; i++) {
//   //     total += args[i];
//   //   }

//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
