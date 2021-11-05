'use strict';
// Класс - шаблон по которому будут созданны однотипные объекты
// Экземпляр - это объект созданный по классу
// Интерфейс - набор доступных методов и свойств

//? Функция конструктор
//  Создаем человека по образу
const Human = function ({ hairColor, firstName, lastName } = {}) {
  // this = {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.legs = 2;
  this.hands = 2;
  this.eyes = 2;
  this.hairColor = hairColor;
  //   return this;
};

Human.prototype.changeHairColor = function (newHairColor) {
  this.hairColor = newHairColor;
};

Human.prototype.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

console.dir(Human);

const person1 = new Human({ hairColor: 'blue', firstName: 'Caroline', lastName: 'Singleton' }); //[[Prototype]] ---> Human.prototype
person1.getFullName();

console.log(person1);

const person2 = new Human(); //[[Prototype]] ---> Human.prototype
person2.getFullName();

console.log(person2);
// const person2 = new Human('red', 'Jose', 'Stone');

// person1.changeHairColor('green');

// person2.changeHairColor('pink');
// console.log(person2);

// const person1 = {
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'brown',
//   eyesColor: 'brown',
// };

// const person2 = {
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'white',
//   eyesColor: 'blue',
// };

//? Создаем методы для наших экземпляров
