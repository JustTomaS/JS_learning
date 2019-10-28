console.log("Объекты");                           //Объекты

console.log("1. Создать объект, добавить к нему свойство");
console.log("2. Изменить свойство объекта");
console.log("3. Сделать свойство объекта фунецией сложения двух чисел");

let s_obj = {};                                   //Создаем объект

s_obj.name = 'Denis';                             //добавляем свойство объекта
s_obj.name = 'Kate';                              //изменяем свойство объекта

s_obj.result = (a, b) => a + b;                   //делаем свойство объекта функцией


console.log("Создайте пустой объект user.");
console.log("Добавьте свойство name со значением John.");
console.log("Добавьте свойство surname со значением Smith.");
console.log("Измените значение свойства name на Pete.");
console.log("Удалите свойство name из объекта.");
 
let user = {};                                    //Создаем объект

user.name = "John";                               //Добавляем свойство name
user.surname = "Smith";                           //Добавляем свойство surname
user.name = "Pete";                               //Изменение свойства name

delete user.name;                                 //удаляем свойство name


console.log("Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.");
console.log("Если объект salaries пуст, то результат должен быть 0.");

let salaries = {                                  //заданный объект со значениями
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;                                      //объявляем переменную
for (let key in salaries) {                       //для каждого ключа объекта
  sum += salaries[key];                           //суммируем значения
}

console.log(sum);                                 //выводим результат


console.log("Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2."); 

let menu = {                                       //заданный объект со значениями
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {                     //объявляем функцию
  for (let key in obj) {                            //для каждого ключа объекта
    if (typeof obj [key] == `number`) {             //проверяем, является ли числом
      obj [key] *= 2;                               //если число, умножаем на 2
    }
  }
}

multiplyNumeric(menu);                              //запускаем функцию
console.log (menu)                                  //выводим результат