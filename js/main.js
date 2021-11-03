'use strict';
/*
 * ================ Грязные и чистые функции ================
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const addNumbers = function (...args) {
//  args = [9,6,8];
//   numbers.push(...args);
// };

// addNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const addNumbers = function (arr, ...args) {
//   const copyArr = [...arr];

//   copyArr.push(...args);

//   return copyArr;
// };

// const newArray = addNumbers(numbers, 6, 7, 8);

// console.log('source numbers array: ', numbers);
// console.log('new numbers array: ', newArray);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   const copy = [...arr];

//   for (let i = 0; i < copy.length; i += 1) {
//     copy[i] *= 2;
//   }

//   return copy;
// };

// const doubleNumbers = doubleMulti(numbers);

// console.log(numbers);
// console.log(doubleNumbers);
