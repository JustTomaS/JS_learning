console.log("Exercise #29");                            //Задание 29

console.log("Write a JavaScript function to get the function name."); 
console.log("Answer"); 

function f_name() {                                     //объявляем функцию
  console.log (arguments.callee.name);                  //имя функции
}                                                              
f_name()                                                //исполняем функцию