'use strict';

/* ============ Операция spread как замена concat и slice ============ */

//  Копия массива
// const numbers = [1, 2, 3, 4, 5];
// const copy = [...numbers];

// console.log(symbols);
// const copy = [].concat(numbers);
// const copy = numbers.slice();
// const copy = numbers;

// copy.push(10);
// numbers.push(20);

// console.log('numbers:', numbers);
// console.log('copy:', copy);

// Объединение массивов
// const firstArr = [1, 2, 3];
// const secondArr = [4, 5, 6];

// const totalArr = [...firstArr, ...secondArr];

// console.log(totalArr);

// Распыления массива в функцию
// const numbers = [20, 30, 124, 0, 12];

// console.log(Math.max(...numbers));

// Распыления сложных типов
// const someArr = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const copy = [...someArr];

// copy[0].a = 10;

// console.log('source arr:', someArr);
// console.log('copy arr', copy);

/* ============ Операция spread как замена Object.asign({}, ...sources) ============ */
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const secondUser = {
//   firstName: 'Donald',
//   lastName: 'Mitchell',
// };

// const copy = { ...user };
// const copy = {
// firstName: 'Jonathan',
// lastName: 'Barnett',
// age: 30,
// someArr: [1, 2, 3, 4],
// }

// copy.firstName = 'Oleksii';

// console.log('source obj:', user);
// console.log('copy obj:', copy);

const obj = {
  a: 1,
  b: 2,
  c: {
    q: 10,
    p: null,
    y: function () {
      console.log(this.q);
    },
    l: [1, 2, 3, 4],
  },
  k: [5, 4, 3, 2],
};

const deepSpread = function (target) {
  if (Array.isArray(target)) {
    const copy = [...target];

    copy.forEach((elem, idx, arr) => {
      if (elem === Object(elem)) {
        if (Array.isArray(elem)) {
          arr[idx] = [...elem];
        } else {
          arr[idx] = deepSpread(elem);
        }
      }
    });

    return copy;
  }

  const copy = { ...target };
  const keys = Object.keys(copy);

  for (let key of keys) {
    if (copy[key] === Object(copy[key])) {
      if (typeof copy[key] === 'function') {
        copy[key].bind(copy);
      } else if (Array.isArray(copy[key])) {
        copy[key] = [...copy[key]];
      } else {
        copy[key] = deepSpread(copy[key]);
      }
    }
  }

  return copy;
};

const newObj = deepSpread(obj);

newObj.k.push(10);
newObj.c.q = 20;

obj.c.y();
newObj.c.y();

console.log('source obj:', obj);
console.log('copy obj', newObj);

/* ============ Операция rest ============ */
// Напишите функцию summ, которая сумирует произвольное количество аргументов

// const sum = function (...args) {
//   let total = 0;

//   for (let value of args) {
//     total += value;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 10, 20));
