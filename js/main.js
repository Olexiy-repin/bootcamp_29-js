'use strict';
/* ========= Массивы: литерал массива, элементы, индексация, длина ========= */
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['Jazz', 'Blues'];
// console.log(genres);

// genres.push('Рок-н-ролл');
// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// const firstElem = genres.shift();
// console.log(genres);
// console.log(firstElem);

// genres.unshift('Country', 'Reggy');
// console.log(genres);

/* ========= Передача по ссылке и по значению ========= */
// Создайте переменную a = 10.
// Создайте и присвойте переменной b -> переменную a
// Вывидите в консоль обе этих переменных
// Измените значение переменной a и ещё раз выведете в консоль
// let a = 10;
// const b = a;

// console.log(`a: ${a}`); //10
// console.log(`b: ${b}`); //10

// a = 20;

// console.log(`a: ${a}`); //20
// console.log(`b: ${b}`); //10

// Создайте массив arr1 = [1, 2, 3].
// Создайте и присвойте массиву arr2 -> массив arr1
// Вывидите в консоль оба эти массива
// Добавьте элемент в массив arr1 и ещё раз выведете оба массива в консоль
// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(`arr1: ${arr1}`); // [1, 2, 3]
// console.log(`arr2: ${arr2}`); // [1, 2, 3]

// arr1.push(4);

// console.log(`arr1: ${arr1}`); // [1, 2, 3, 4]
// console.log(`arr2: ${arr2}`); // [1, 2, 3,4]

// arr2.push(5);

// console.log(`arr1: ${arr1}`); // [1, 2, 3, 4]
// console.log(`arr2: ${arr2}`); // [1, 2, 3,4]

/* ========= Перебор массива циклами for и for...of ========= */
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// 1 вариант решения
// for (let i = 0; i < numbers.length; i += 1) {
//   const elem = numbers[i];
//   if (elem < min) {
//     min = elem;
//   }
// }

// 2 вариант решения
// for (const elem of numbers) {
//   if (elem < min) {
//     min = elem;
//   }
// }

// console.log(min);

// У нас есть массив с зарплатами сотрудников, нужно посчитать общую сумму зарплат
// const salaries = [200, 450, 600, 150, 300];
// let summ = 0;

// 1 вариант решения
// for (let i = 0; i < salaries.length; i += 1) {
//   summ += salaries[i];
// }

// console.log(summ);

// 2 вариант решения
// for (const elem of salaries) {
//   summ += elem;
// }

// console.log(summ);

// У нас есть несколько массивов с зарплатами сотрудников из разных отделов, нужно посчитать общую сумму зарплат
// 1 вариант решения
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let summ = 0;

// for (const elem of managerSalaries) {
//   summ += elem;
// }

// for (const elem of developersSalaries) {
//   summ += elem;
// }

// console.log(summ);

// 2 вариант решения
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const totalSalaries = [];
// let summ = 0;

// for (const elem of managerSalaries) {
//   totalSalaries.push(elem);
// }

// for (const elem of developersSalaries) {
//   totalSalaries.push(elem);
// }

// for (const elem of totalSalaries) {
//   summ += elem;
// }

// console.log(summ);

// 3 вариант решения
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const totalSalaries = managerSalaries.concat(developersSalaries);
// let summ = 0;

// for (const elem of totalSalaries) {
//   summ += elem;
// }

// console.log(summ);

/* ========= Базовые методы: split и join, indexOf и includes, push, slice и splice, concat ========= */

// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.
// const values = '8 11';
// const arr = values.split(' ');

// const sideA = arr[0];
// const sideB = arr[1];

// const area = sideA * sideB;
// console.log(area);

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// Напиши скрипт который «разворачивает» строку (обратный порядок букв)
// и выводит ее в консоль.
// 1 вариант решения
// const string = 'Welcome to the future';
// const symbolArr = string.split('');
// const reverseArr = [];

// for (let i = symbolArr.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(symbolArr[i]);
// }

// const reverseStr = reverseArr.join('');

// console.log(string);
// console.log(reverseStr);

// 2 вариант решения
// const string = 'Welcome to the future';
// let reverStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverStr += string[i];
// }

// console.log(reverStr);

// У нас есть массив сотрудников, отсортируйте его, что бы сотрудники не повторялись
// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }
// console.log(filteredEmployees);
// // Сотрудник Shaw уволился, удалите его из массива
// const shawIdx = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(shawIdx, 1);
// console.log(filteredEmployees);

// // Добавьте нового сотрудника Thornton, перед Watkins;
// const watkinsIdx = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(watkinsIdx, 0, 'Thornton');
// console.log(filteredEmployees);
