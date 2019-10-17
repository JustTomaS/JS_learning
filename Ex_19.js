console.log("Exercise #19");                  //Задание 19

console.log("Write a JavaScript function to get the number of occurrences of each letter in specified string."); 
console.log("Answer"); 
  
function bigger_element_then_other(number)
   {
     return function(sravneniye)
     {
     return (sravneniye >= number);
     };
   }
let result = [1, 7, 5, 26, 70].filter(bigger_element_then_other(10));          //заводим массив значений, фильтруем
console.log(result);                                                           //выводим результат