'use strict';
/* ======= Математические операторы (+, -, *, /, %, **) ======= */
// Данно два числа 10 и 20. Проведите над этими числами
// математические операции (+ - / *).
// const a = 10;
// const b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);
// console.log(a ** b);

//Проверьте четные ли числа 15, 20, 45, 30.
// console.log(15 % 2 === 0);
// console.log(20 % 2 === 0);
// console.log(45 % 2 === 0);
// console.log(30 % 2 === 0);

// Данно 90 минут, узнайте сколько в данном числе
// содержиться часов и минут. Результат выведите в консоль.
// const totalMinutes = 50;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;
// const result = hours + ':' + minutes;

// console.log(result);
/* =======  Number.parseInt() Number.parseFloat() ======= */
// let userInput = Number.parseInt(prompt('Ваше число'));
// userInput = Number.parseFloat(userInput);

// console.log(userInput);
// Данна строка '24px', достаньте с этой строки целое число
// const str = '24px';
// console.log(Number.parseInt(str));

// Данна строка '25.5%', достаньте с этой строки дробное число
// const str = '25.5%';
// console.log(Number.parseFloat(str));

// Попробуйте привести к числу, данную строку 'abc'
// const str = 'abc';
// console.log(Number(str));

// Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль
// 1. Создать переменную и записать в неё число
// 2. Создать вторую переменную и записать в неё число
// 3. Создать переменную под результат и сложить в ней первую и вторую переменные
// 4. Вывести результат в консоль
// const firstNumber = Number(prompt('Ваше число'));
// const secondNumber = Number(prompt('Ваше число'));
// const result = firstNumber + secondNumber;

// console.log(result);

/* ======= Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random() ======= */
// Данно число 23.5, примените к нему различный методы округления и посмотрите на результат
// Протестируйте на числах, 23.3, 23.9
// const someNumber = 23.93245;

// console.log(Math.floor(someNumber)); // 23
// console.log(Math.ceil(someNumber)); // 24
// console.log(Math.round(someNumber)); // 24

// Попросите пользователя ввести число и степень. Возведите число в степень
// и выведете результат в консоль
// const someNumber = Number(prompt('Введите число'));
// const pow = Number(prompt('Введите степень'));
// const result = Math.pow(someNumber, pow);

// console.log(result);

// Сгенирируйте рандомное число от 0 до 1
// от 10 до 50

// const min = 1;
// const max = 3;

// for (let i = 0; i <= 100; i++) {
//   const rand = Math.floor(min + Math.random() * (max + 1 - min));
//   console.log(rand);
// }

// Сгенирируйте рандомное число. Минимальное и максимально значение, получить от пользователя
// const min = Number(prompt('минимальное число'));
// const max = Number(prompt('максимальное число'));

// const rand = Math.floor(min + Math.random() * (max + 1 - min));
// console.log(rand);

// const a = 0.1;
// const b = 0.2;
// const result = (a * 10 + b * 10) / 10;

// console.log(Number(result.toFixed(1)));
