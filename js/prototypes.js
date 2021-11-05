'use strict';
/*
 * Цепочки прототипов.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

const firstObj = {
  a: 1,
};
console.log('firstObj: ', firstObj);

const secondObj = Object.create(firstObj);
secondObj.b = 2;

console.log('secondObj: ', secondObj);
console.log(secondObj.toString);

const thirdObj = {
  c: 3,
  __proto__: secondObj,
};

console.log('thirdObj: ', thirdObj);
console.log(thirdObj.toString);

for (const item in thirdObj) {
  if (thirdObj.hasOwnProperty(item)) {
    console.log(`${item}: ${thirdObj[item]}`);
  }
}

console.log([1, 2, 3]);

console.log(5.23);
