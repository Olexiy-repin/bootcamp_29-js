'use strict';

/*
 * try/catch
 * Ошибки фазы парсинга обработать нельзя. Только ошибки фазы выполнения.
 * Объект ошибки
 * try/catch работает только с синхронным кодом
 * Обработка ошибок в асинхронном коде
 */

console.log('first');

try {
  const data = JSON.parse('Well, this is awkward');
} catch (err) {
  console.log(err);
}

try {
  console.log('До setTimeout;');

  setTimeout(() => {
    try {
      myVar;
    } catch (err) {
      console.log(err);
    }
  }, 1000);

  console.log('После setTimeout');
} catch (err) {
  console.log('В блоке catch');
  console.log(err.stack);
}

console.log('second');
