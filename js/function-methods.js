'use strict';
/*
 * ============ Методы функция call и apply ============
 */

// Функции это объекты со своими свойствами и методами
// const welcome = function () {
//   console.log('Hello!');
// };

//? call and apply

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// Одалживание метода
// const createCurrentDate = function (...args) {
//   return args.join('.');
// };
// console.log(createCurrentDate(10, 10, 21));

//? bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

//? TASK 01
// Что выведет функция?

// Можем ли мы изменить this дополнительным связыванием?
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

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk, user.loginFail);

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
