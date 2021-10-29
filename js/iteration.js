'use strict';

/* ========== for...in, Object.keys, Object.values ========== */

// Получите сумму зарплат всех сотрудников

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// Через for...in
// let total = 0;

// for (let item in salaries) {
//   // let item = 'John';
//   // let item = 'Ann;
//   // let item = 'Pete';

//   //   console.log(item);
//   //   console.log(salaries[item]);
//   total += salaries[item];
// }

// console.log(total);

// Через Object.keys();
// let total = 0;

// const keys = Object.keys(salaries);
// console.log(keys);

// for (let key of keys) {
//   console.log(key);

//   total += salaries[key];
// }

// console.log(total);

// Через Object.values();
// let total = 0;

// const values = Object.values(salaries);
// console.log(values);

// for (let value of values) {
//   total += value;
// }

// console.log(total);

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);

// dog.name = 'Bob';

// console.log(dog);

// for (let item in dog) {
//   if (dog.hasOwnProperty(item)) {
//     console.log(item);
//   }
// }
