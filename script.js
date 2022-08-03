/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';
// const numberOFilms = prompt("How many movies did you watch?", "5");
// const personalMovieDB = {
//     count: numberOFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// const a = prompt("one of the last movie",'');
// const b = prompt("how will you rate it",'');
// const c = prompt("one of the last movie",'');
// const d = prompt("how will you rate it",'');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// Код возьмите из предыдущего домашнего задания
// const numberOFilms = +prompt("How many movies did you watch?", "");
// const personalMovieDB = {
//     count: numberOFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };
// for (let i = 1; i < numberOFilms; i++) {
//     const a = prompt("movie",'');
//     const b = prompt("how will you rate it",'');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// console.log(personalMovieDB);
// if (personalMovieDB.count < 10) { console.log('you are watching not mutch movies'); 
// } else  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('you are clasic viewer');
// } else if (personalMovieDB.count >= 30) { 
//     console.log('you are profesional viewer');
// } else { 
//     console.log('an error has occurred');
// }
// console.log(personalMovieDB);



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOFilms;

function start() {
    numberOFilms = +prompt("How many movies did you watch?", "");
    while (numberOFilms == '' || numberOFilms == null || isNaN(numberOFilms)) {
        numberOFilms = +prompt("How many movies did you watch?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberMyFilms() {
    for (let i = 1; i < numberOFilms; i++) {
        const a = prompt("movie",'');
        const b = prompt("how will you rate it",'');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonal() {
    if (personalMovieDB.count < 10) { console.log('you are watching not mutch movies'); 
} else  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are clasic viewer');
} else if (personalMovieDB.count >= 30) { 
    console.log('you are profesional viewer');
} else { 
    console.log('an error has occurred');
}
}

detectPersonal();

function showMyDB() {
    if (!personalMovieDB.privat) {
        return console.log(personalMovieDB); 
}
}
showMyDB();

function writeYourGenres() {
    for (let a = 0; a < 3; a++) {
        let b = a + 1; 
        personalMovieDB.genres[a] = prompt(`Ваш любимый жанр под номером ${b}`, "");
    }
    return personalMovieDB;
}
writeYourGenres();

console.log(personalMovieDB);

