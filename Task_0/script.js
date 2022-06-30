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

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

"use strict";


// Урок №20 - Условия


// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('error');
// } 

// Урок № 22 - Циклы


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);   
// }


// ЗАДАЧА №1
//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 


//Первый способ

let num = 5;

    while (num < 11) {
        console.log(num);
        num++;
    }

//второй способ


for (let i = 5; i < 11; i++) {    
    console.log(i);   
}

//ФУНКЦИИ

function showFirstMessage(){
    console.log('Hello World!');
}

showFirstMessage();

// Урок №26 - обменник валют (аргументы и функции)

const usdCurr = 28;
const eurCurr = 32;

function convert( amount, cur ){
    console.log(cur * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);



    

