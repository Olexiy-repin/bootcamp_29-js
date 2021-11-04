'use strict';
/*
 * ============ Методы функция call и apply ============
 */

// Функции это объекты со своими свойствами и методами
// const welcome = function () {
//   console.log('Hello!');
// };

// welcome.test = 5;

// console.dir(welcome);

//? call and apply
// const showFullName = function (arr, message) {
//   console.log(arr);
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, [1, 2, 3], 'Hello');

// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// showFullName.apply(anotherUser, ['Hello']);

// Одалживание метода
// const createCurrentDate = function () {
//   return [].join.call(arguments, '.');
// };

// console.log(createCurrentDate(10, 10, 21));

//? bind
// const showFullName = function () {
//   console.log(this);
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = showFullName.bind(user);
// showUserFullName();

// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// const showAnotherUserFullName = showFullName.bind(anotherUser);
// showAnotherUserFullName();

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

// someFunction(user.showName.bind(user));

//? TASK 01

// Что выведет этот код?
// const f = function () {
//   console.log(this.name);
// };

// const copyFunc = f.bind({ name: 'Вася' }).bind({ name: 'Петя' });

// copyFunc();

//? TASK 02
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// const checkPassword = function (ok, fail) {
//   const password = 'rockstar';

//   if (password == 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//? TASK 03
// Исправьте функцию, теряющую "this".
// const checkPassword = function (ok, fail) {
//   const password = 'rockstar';

//   if (password == 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// let user = {
//   name: 'Вася',

//   login(result) {
//     console.log(this.name + (result ? ' logged in' : ' failed to log in'));
//   },
// };

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));
