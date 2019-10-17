console.log("Exercise #1");                                                        //Задание 1

console.log("Write a JavaScript function that reverse a number.");                 
console.log("Example x = 32243;");
console.log("Expected Output : 34223");
console.log("Answer"); 

function rev (a) {                                               //объявляем функцию
    a = a + ``;                                                  //конвертим в строку
    return a.split(``).reverse().join(``);                       //разделяем на символы, реверсируем, соединяем
  }
console.log(rev(32243));                                         //выводим результат
