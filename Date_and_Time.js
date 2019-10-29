console.log("Дата и Время");                                  //Дата и Время
//
console.log("Получить текущую дату, вывести в консоль");

let now_date1 = new Date();                                  //получаем текущую дату
console.log (`Текущая дата ${now_date1}`);                   //выводим в консоль

//
console.log("Получить день, месяц и год текущей даты");
console.log("и по отдельности вывести в консоль"); 

let now_date2 = new Date();                                  //получаем текущую дату

console.log (`Текущий день: ` + now_date2.getDate());         //день месяца
console.log (`Текущий месяц: ` + (now_date2.getMonth() + 1)); //месяц
console.log (`Текущий год: ` + now_date2.getFullYear());      //год

//
console.log("Создайте объект Date для даты: 20 февраля 2012 года,");
console.log(" 3 часа 12 минут. Временная зона – местная. Для вывода используйте alert.");

/* <!DOCTYPE html>
<script>
'use strict';
*/
let now_date3 = new Date(2012, 1, 20, 3, 12);                //определяем заданную дату
console.log (now_date3);                                     //выводим результат (вместо alert вывели в консоль)
/*
alert (now_date3);                                           //можно посмотреть в браузере :)
*/

//
console.log("Напишите функцию getWeekDay(date), показывающую день недели в коротком");  
console.log("формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».");  

function getWeekDay (date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];          //забиваем массив необходимых значений дней недели
  return days [date.getDay()];
}
let some_day = new Date ();                                       //определяем текущую дату
console.log(`Сегодня ` + getWeekDay(some_day));                   //выводим день недели

//
console.log("Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.");

const getDateAgo = (date, days) => {

  let some_date = date.getTime();
  let some_days = days * 24 * 60 * 60 * 1000;
  let result = new Date( some_date - some_days );

  return result
} 

let now_date4 = new Date();                                        //определяем дату
console.log(`Это было ` + getDateAgo(now_date4, 100));             //сколько дней назад?

//
console.log("Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. "); 
console.log("Иногда это 30, 31 или даже февральские 28/29."); 
console.log("Параметры: year – год из четырёх цифр, например, 2012. month – месяц от 0 до 11."); 


let getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

console.log(`Последний день месяца: ` + getLastDayOfMonth(2019, 1));      //какой день последний?
//

//
console.log("Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.");

function getSecondsToday() {
  let now_date5 = new Date();
  return now_date5.getHours() * 3600 + now_date5.getMinutes() * 60 + now_date5.getSeconds();
}
console.log (`Прошло ` + getSecondsToday() + `секунд`);                                     
//

console.log("Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.");

const getSecondsToTomorrow = () => {
  let h_in_sec = new Date().getHours() * 60 * 60;
  let m_in_sec = new Date().getMinutes() * 60;
  let just_sec = new Date().getSeconds();
  let result = 24 * 60 * 60 - (h_in_sec + m_in_sec + just_sec);

  return result
}
console.log (`До завтра осталось ` + getSecondsToTomorrow() + `секунд`);

//
console.log("Напишите функцию formatDate(date), форматирующую date по следующему принципу:"); 
console.log("Если спустя date прошло менее 1 секунды, вывести `прямо сейчас`.");
console.log("В противном случае, если с date прошло меньше 1 минуты, вывести `n сек. назад`."); 
console.log("В противном случае, если меньше часа, вывести `m мин. назад`.");
console.log("В противном случае, полная дата в формате `DD.MM.YY HH:mm`. А именно: `день.месяц.год часы:минуты`,");
console.log("всё в виде двух цифр, т.е. 31.12.16 10:00.");

const formatDate = (date) => {
  let delta = new Date().getTime() - date.getTime();
  delta /= 1000;
  let elsYear = date.getFullYear().toString().slice(-2);
  let elsMonth = date.getMonth() + 1 > 9 ? 
  date.getMonth() + 1 :
  '0' + (date.getMonth() + 1);
  let elsDate = date.getDate() > 9 ?
  date.getDate() :
  '0' + date.getDate();
  let elsHours = date.getHours() > 9 ?
  date.getHours() :
  '0' + date.getHours();
  let elsMinutes = date.getMinutes() > 9 ?
  date.getMinutes() :
  '0' + date.getMinutes();
  let els = elsDate + '.'
  + elsMonth 
  + '.' + elsYear
  + ', ' + elsHours
  + ':' + elsMinutes;

  if (delta < 1) {
    console.log('Прямо сейчас')
  } else if (delta < 60) {
    console.log(delta + ' сек. назад')
  } else if (delta < 3600) {
    console.log( Math.ceil(delta/60) + ' мин. назад')
  } else {
    console.log(els)
  }
}
formatDate(new Date(new Date - 86400 * 1000));
