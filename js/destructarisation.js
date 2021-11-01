'use strict';
/* ============ Деструктуризация объектов ============ */

// У нас есть объект:
// const user = {
//   username: 'John',
//   lastName: 'Reese',
//   years: 30,
// };

// const { username, lastName, years, gender = 'female' } = user;
// const username = user.username;
// const lastName = user.lastName;
// const years = user.years;
// const gender = user.gender;
// const age = user.age

// console.log(username);
// console.log(lastName);
// console.log(myYears);
// console.log(gender);

// Напишите деструктурирующее присваивание, которое:
// свойство username присвоит в переменную username.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// const { username, years: age, isAdmin = false } = user;

// console.log(username);
// console.log(years);
// console.log(isAdmin);

/* ============ Глубокая деструктуризация объектов ============ */
// const team = {
//   names: {
//     firstName_1: 'Anton',
//     firstName_2: 'Oleg',
//   },
//   number: 2,
// };

// const {
//   names: { firstName_1: myName = 'Oleksii', firstName_2 },
//   number,
// } = team;

// console.log(number);
// console.log('firstName_1: ', myName);
// console.log('firstName_2: ', firstName_2);

/* ============ Деструктуризация массивов ============ */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [user1, , ,user4] = names;

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

// У нас есть объект salaries с зарплатами:
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// const topSalary = function (salaries) {
//   const arr = Object.entries(salaries);
//   // [ ['John', 100],['Pete', 300],['Mary', 250] ]
//   let maxSalary = 0;
//   let maxName = null;

//   for (const [username, salary] of arr) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       maxName = username;
//     }
//   }

//   return {
//     [maxName]: maxSalary,
//   };
// };

// console.log(topSalary(salaries));
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
