'use strict';
/* ======= Конкатенация строк, шаблонные строки ======= */
// Запросите у пользователя имя с возрастом
// и выведете в консоль сообщение:
// Hello имя_пользователя, your age is возраст_пользователя
// const userName = prompt('Ваше имя?');
// const userAge = prompt('Ваш возраст?');

// const result = 'Hello ' + userName + ', your age is: ' + userAge;

// console.log(result);

// Выполните задачу выше, используя шаблонные строки
// const userName = prompt('Ваше имя?');
// const userAge = prompt('Ваш возраст?');

// const result = 'Hello ' + userName + ', your age is: ' + userAge;
// const result = `Hello ${userName}, your age is: ${userAge}`;

// console.log(result);
/*======= Свойства и Методы строк =======*/
// Запросите у пользователя имя
// и узнайте из скольких символов, состоит имя
// const userName = prompt('Ваше имя?');
// console.log(userName.length);

// Попросите пользователя ввести email
// и переведите в нижний регистр
// const userEmail = prompt('Ваш email?');
// console.log(userEmail.toLowerCase());

// Попросите пользователя ввести email
// и переведите в верхний регистр
// const userEmail = prompt('Ваш email?');
// console.log(userEmail.toUpperCase());

// Есть строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'
// Узнайте есть ли в этой строке язык:
// 'JavaScript', а 'JS'?
// Если есть, узнайте позицию на которой находиться данная подстрока
// const programmLanguages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const subStr = 'JavaScript';

// console.log(programmLanguages.includes(subStr));
// console.log(programmLanguages.indexOf(subStr));

// У нас есть строка '24px', узнайте на что заканчивается данная строка,
// на %, rem, em или px
// const str = '24px';
// console.log(str.endsWith('%'));
// console.log(str.endsWith('rem'));
// console.log(str.endsWith('em'));
// console.log(str.endsWith('px'));

// У нас есть строка '23,4', замените запятую на точку
// const str = '23,4,';
// const replaceStr = str.replace(',', '.');
// console.log(replaceStr);

// У нас есть строка
// 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
// Замените все вхожденя dog на monkey
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const replacedStr = str.replaceAll('dog', 'monkey');

// console.log(str);
// console.log(replacedStr);

// У нас есть дата в формате '12:05:21', замените : на .
// const someDate = '12:05:21';
// const currentDate = someDate.replaceAll(':', '.');
// console.log(currentDate);

// Данна строка 'Vasyl Pupkin is 24 years old',
// Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст
// const someStr = 'Vasyl Pupkin is 24 years old';
// const fullName = someStr.slice(0, 12);
// const age = someStr.slice(16, 18);

// console.log(fullName);
// console.log(Number(age));
