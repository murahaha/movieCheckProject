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
        const a = prompt("movie",'').trim();
        const b = prompt("how will you rate it",'').trim();
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

