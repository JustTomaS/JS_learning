console.log("Exercise #28");                            //Задание 28

console.log("Write a JavaScript program to pass a 'JavaScript function' as parameter."); 
console.log("Answer"); 

function priv_func(a, soobsheniye) {                     //функция как аргумент
  soobsheniye();                                  
}                                                         
function message() {                                     //функция-сообщение       
  console.log ("Hi, Kate! :)");               
}
priv_func(1, message);                                   //результат (вызов функции callback)