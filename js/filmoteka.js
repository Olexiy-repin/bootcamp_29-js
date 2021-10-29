'use strict';
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: ['Amelia Gibson', 'Cameron Clayton', 'Viola Vasquez', 'Lula Collins', 'Victor Nichols'],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: ['Marguerite Gibbs', 'Lora Alvarez', 'Jorge Simpson', 'Thomas Hall', 'Darrell Hunter'],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: ['Calvin Andrews', 'Mamie Myers', 'Madge Townsend', 'Ralph Kim', 'Jorge Reese'],
    adult: false,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: ['Adele Marsh', 'Melvin Burgess', 'Jesus Reese', 'Harriet Moreno', 'Curtis Cox'],
    adult: true,
  },
];

// Соберите все названия фильма в масив
// const getAllFilms = function (allFilms) {
//   const filmsTitles = [];

//   for (const film of allFilms) {
//     filmsTitles.push(film.title);
//   }

//   return filmsTitles;
// };

// console.log(getAllFilms(filmoteka));

// Найдите фильм по названию
// const findFilmByName = function (allFilms, filmTitle) {
//   for (const film of allFilms) {
//     // const film = {
//     //   id: 2,
//     //   title: 'Venom',
//     //   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     //   rating: 8,
//     //   actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
//     //   adult: true,
//     // }
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }

//   return 'Такой фильм не найден';
// };

// console.log(findFilmByName(filmoteka, 'Venom'));

// Соберите все фильмы которые 18+ в масив
// const getAdultFilms = function (allFilms) {
//   const adultFilms = [];

//   for (let film of allFilms) {
//     if (film.adult) {
//       adultFilms.push(film);
//     }
//   }

//   return adultFilms;
// };

// console.log(getAdultFilms(filmoteka));

// Соберите все фильмы в масив, которые без возростного ограничения
// const getNotAdultFilms = function (allFilms) {
//   const adultFilms = [];

//   for (let film of allFilms) {
//     if (!film.adult) {
//       adultFilms.push(film);
//     }
//   }

//   return adultFilms;
// };

// console.log(getNotAdultFilms(filmoteka));
