console.log("Массивы");                                                          //Массивы

console.log("Перебор массива с выводом в консоль каждого элемента");             //Перебор массива с выводом в консоль каждого элемента

console.log("Вариант 1");
let zivotniye = ["котики", "собачки", "птички", "рыбки", "енотики"];             //без указания парметров вывода
zivotniye.forEach(console.log);                                                  //выводит все значения, индексы и массив целиком


console.log("Вариант 2"); 
["Гарри", "Гермиона", "Рон"].forEach(function(item) {                            //указание параметров массива для вывода
  console.log(item);                                                             //только значения массива
});

console.log("Преобразовать массив в строку и обратно в массив ");                //Преобразовать массив в строку и обратно в массив 

let qa = ["Денис", "Артем", "Катя", "Марина", "Никита"];                         //Объявляем массив
let str = qa.join(',');                                                          //преобразуем в строку с помощью метода join
console.log(str);                                                                //выводим результат
let mass = str.split(',');                                                       //преобразуем обратно в массив с помощью метода split
console.log(mass);                                                               //выводим результат

console.log("Добавить к каждому элементу массива слово hello");                  //Добавить к каждому элементу массива слова hello

let names = ["Денис", "Артем", "Катя", "Марина", "Никита"];                       //Объявляем массив
let adding = names.map(item => "hello, " + item);                                //добавляем hello к каждому елементу массива
console.log(adding);                                                             //выводим результат


console.log("Преобразовать числовой массив в boolean");                          //Преобразовать числовой массив в boolean

let num_arr = [0, 1, 2, 3, 4];                                                   //объявляем массив
let bool_arr = num_arr.map(item => !!item);                                      //указываем условие
console.log(bool_arr);                                                           //выводим преобразованный массив в boolean        


console.log("Задачи из теории");
console.log("Сортировать в обратном порядке");

let arr = [5, 2, 1, -10, 8];                                                     //заданный массив
arr.sort((x, y) => y - x);                                                       //сортируем
console.log(arr);                                                                // 8, 5, 2, 1, -10 должно получиться


console.log("Скопировать и отсортировать массив");
function copySorted(arr2) {                                                      //"рисуем" функцию
 return arr2.slice().sort();
}
let arr2 = ["HTML", "JavaScript", "CSS"];                                        //заданный массив
let sorted = copySorted(arr2);
console.log(sorted);                                                             // CSS, HTML, JavaScript
console.log(arr2);                                                               // HTML, JavaScript, CSS (без изменений)

console.log("Трансформировать в массив имён");
let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};
let users = [vasya, petya, masha];
let names2 = users.map(item => item.name);                                        //преобразуем в массив имен                                                        
console.log(names2);                                                              // Вася, Петя, Маша

