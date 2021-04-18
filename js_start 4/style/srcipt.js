"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели ?','');

const personalMovieDB = {
    count:numberOfFilms,
    movie:{},
    actors:{},
    genres:[],
    privat:false
};

for(let i=0; i<2; i++){
    const a = prompt ('Один из последних просмотренных фильмов?',''),
        b = prompt ('На сколько оцените его?','');

    if(a != null && b !=null && a!='' && b!='' && a.length < 50) {
        personalMovieDB.movie[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }

}

if(personalMovieDB.count <10 ){
    console.log('This is very bad');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You classik kinograf');
} else if(personalMovieDB.count >=30){
    console.log('You very cool!');
} else {
    console.log('ERROR!!!')
}

console.log(personalMovieDB);
