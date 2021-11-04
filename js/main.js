'use strict';

/*
 * ============ Контекст вызова this ============
 */

/* 
- this существует только фнутри функций.
- На контекст не влияет то где функция была //!ОБЪЯВЛЕНА.
- На контекст влияет то где функция //!ВЫЗЫВАЕТСЯ.
*/

// Расмотрим как this ведёт себя в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   whatIsThis() {
//     console.log(`this ----> ${this}`);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.whatIsThis();
// user.showName();

// Расмотрим как this ведёт себя в обычных функциях (строгий, не строгий режим)
//? Function expression
// const fn = function () {
//   console.log(`this ---->`, this);
// };

// fn();

//? Function declaration
// function fn() {
//   console.log(`this ---->`, this);
// }

// fn();

//? Arrow function
// const fn = () => {
//   console.log(`this ---->`, this);
// };

// fn();

// Присвоение функции как метода объекта
// const user = {
//   name: 'Luis',
//   age: 30,
// };

// const anotherUser = {
//   name: 'Jeremy',
//   age: 20,
// };

// const showThis = function () {
//   console.log(`this ---->`, this);
// };

// const showThisName = function () {
//   console.log(`this name is: ${this.name}`);
// };

// user.showThis = showThis;
// user.showThisName = showThisName;

// user.showThis();
// user.showThisName();

// anotherUser.showThis = showThis;
// anotherUser.showThisName = showThisName;

// anotherUser.showThis();
// anotherUser.showThisName();

// Вызов метода объекта без контекста
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// showUserThis();
// showUserName();

// This в callback функциях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // callback = user.showThis
//   //   console.log(callback);
//   callback();
// };

// someFunction(user.showThis);

// This в стрелочных функциях. Стрелочные функции не имеют своего this, this в стрелках всегда ссылается на родительский this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge: newAge => {
//     console.log(`this ---->`, this);
//     // this.age = newAge;
//   },
// };

// user.changeAge();

// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge(newAge) {
//     console.log(`this ---->`, this);

//     const someFn = () => {
//       console.log(`this ---->`, this);
//       this.age = newAge;
//     };

//     someFn();
//   },
// };

// user.changeAge();

//? TASK 01
// Каким будет результат выполнения этого кода?
// let user = {
//   name: 'Джон',
//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;
// goFn();

//? TASK 02
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name);

//? TASK 03
// Каким будет результат console.log
// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

//? TASK 04
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this;
//   },

//   down() {
//     this.step -= 1;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep();
