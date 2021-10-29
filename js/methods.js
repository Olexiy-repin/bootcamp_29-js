'use strict';

/* ===========  Методы объекта и this при обращении к свойствам в методах =========== */
//  - changeTitle(newTitle) - изменяет название фильма
//  - addActor(newActor) - добавляет актёра
//  - updateRating(newRating) - обновляет рейтинг фильма
//  - isAdult - проверяет возрастное ограничение на фильм

const filmDuna = {
  title: 'Duna',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    if (!this.actors.includes(newActor)) {
      this.actors.push(newActor);
      return;
    }

    console.log('Такой актёр уже есть');
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  isAdult() {
    return this.adult;
  },
};

filmDuna.changeTitle('Venum');

filmDuna.addActor('Warren Rice');

filmDuna.updateRating(8);

console.log(filmDuna);

console.log(filmDuna.isAdult());

// Плохой вариант
// const changeTitle = function (obj, newTitle) {
//   obj.title = newTitle;
// };

// console.log(filmDuna);

// changeTitle(filmDuna, 'Venum');

// console.log(filmDuna);
