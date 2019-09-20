//Типы данных

//Число

console.log("Числа");

console.log(9999999999999999); //что вообще происходит с числом? JS и числа - это прекрасно
let chislo = 1;                
console.log(chislo);           
console.log(1/0);              //бесконечность
console.log(5+5);              //сложение
console.log(5-5);              //вычитание
console.log(5/5);              //деление
console.log(5*5);              //умножение
console.log("что-то"/2);       //неопределенность

//Строка

console.log("Строки");

let stroka="Привет, Кать! Привет, Никит! Как вам мой супер код?";
console.log(stroka);

//Логический тип (boolean)
console.log("Логический тип (boolean)");

let bool_var = 5 > 1;
console.log(bool_var);      //должно быть true

let bool_var2 = 5 < 1;
console.log(bool_var2);      //должно быть false

//Null

console.log("Тип Null");

let null_var = null;
console.log(null_var);      //null

//Undefined
//console.log("Тип Underfined");
//let X;
//console.log(x);

//Объект

console.log("Объект");

let animals = {                // объект
    cats: "Винсент и Мона",    
    dogs: "У меня нет собаки" 
  };
  console.log("Котики " + animals.cats);  

//Символ
console.log("Символ");
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);

console.log("Преобразование типов"); //преобразование типов

console.log("Преобразование в строку"); //преобразование в строку
let bool_var3 = true;

console.log(String(true) === "true" + "BOOL => String"); // "true"

console.log("Преобразование в число");//преобразование в число

let num1 = +"123";
console.log(num1);
let num2 = Number("123");
console.log(num2);

console.log("Преобразование к bool");//преобразование к логическому значению

console.log( 0 == "\n0\n");
console.log( 1 == "\n0\n");

//Математические операции
console.log("Сложение");  //Сложение

// Number + Number
console.log (1 + 2);

// Boolean + Number
console.log(true + 1);

// Boolean + Boolean
console.log (false + false);

// Number + String
console.log(5 + " дней");

// String + Boolean
console.log("WTF " + false);

// String + String
console.log("Тиньк" + "офф");

console.log("Вычитание");  //Вычитание

console.log(10 - 5);
console.log(2 - 5 );
console.log("WTF" - 3);

console.log("Деление");  //Деление

console.log(1 / 2);
console.log(10.0 / 20.0);
console.log(10/0);
console.log(5.0 / 0.0);
console.log(5.0 / -0.0);

console.log("Умножение");  //Умножение

console.log(5 * 2);
console.log(-5 * 2);
console.log(Infinity * 0);
console.log(Infinity * Infinity);
console.log("WTF" * 5);