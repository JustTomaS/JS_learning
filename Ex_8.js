console.log("Exercise #8");                                                        //Задание 8

console.log("Write a JavaScript function that accepts a number as a parameter and check the number is prime or not."); 
console.log("Answer"); 

function prime_f(pr)                                    //объявляем функцию
{                                                       
  if (pr===1)                                           
  {
    return false;
  }
  else if(pr === 2) {
    return true;
  } 
  else {
    for(let x = 2; x < pr; x++) { 
      if(pr % x === 0) {
        return false;
      }
    }
    return true;                                        //проверяем условиями вхождения чисел, что числа
  }                                                     //являются простыми, т.е. деляться только на себя и единицу
  }                                                     //если данное условие ложно, выводим false (число не простое)
console.log (prime_f(3));                               //выводим результат, исполняем функцию