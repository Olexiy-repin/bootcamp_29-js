'use strict';
//? TASK 01
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает
// и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(stone => stone.name === stoneName);

//     if (currentStone !== undefined) {
//       return currentStone.price * currentStone.quantity;
//     }

//     return 'Такой камень не найден';
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

//? TASK 02
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.
// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },

//   getContacts() {
//     return this.contacts;
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.getContacts());

//? TASK 03
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(20, 30);
// console.log(calculator.add());
// console.log(calculator.mult());
