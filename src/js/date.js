'use strict';
// Создание новой даты

// Unix время

// Методы даты

//? TASK 01
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// const date = new Date(2012, 1, 20, 3, 12);
// const date = new Date('February 20, 2012 03:12:00');
// console.log(date);

//? TASK 02
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// const getWeekDay = date => {
//   const shortFormatDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return shortFormatDays[date.getDay()];
// };

// const date = new Date();
// console.log(getWeekDay(date));

//? TASK 03
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2024, 1));

//? TASK 04
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// const getSecondsToTomorrow = () => {
//   const date = new Date();
//   const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
//   const diff = tomorrow - date;

//   console.log(Math.round(diff / 1000));
// };

// getSecondsToTomorrow();
