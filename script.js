'use strict';

let numberOFilms;


const personalMovieDB = {
    count: numberOFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function() {
        numberOFilms = +prompt("How many movies did you watch?", "");
        while (numberOFilms == '' || numberOFilms == null || isNaN(numberOFilms)) {
            numberOFilms = +prompt("How many movies did you watch?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonal: function() {
        if (personalMovieDB.count < 10) { console.log('you are watching not mutch movies'); 
    } else  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you are clasic viewer');
    } else if (personalMovieDB.count >= 30) { 
        console.log('you are profesional viewer');
    } else { 
        console.log('an error has occurred');
    }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
    }
    },
    writeYourGenres: function() {
        for (let a = 0; a < 3; a++) {
            let b = a + 1; 
            this.genres[a] = prompt(`Ваш любимый жанр под номером ${b}`, "");
            if(this.genres[a] == '' || this.genres[a] == null || !this.genres[a].trim()) { a--;} 
        }
        this.genres.forEach((movie, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${movie}\n`);
            
        });
        return this;
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
             personalMovieDB.privat = false; 
            } else {
                personalMovieDB.privat = true;
            }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonal();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();


console.log(personalMovieDB);


