console.log("Exercise #15");                             //Задание 15

console.log("Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases."); 
console.log("Accept b and n from the user and display the result."); 
console.log("reswer"); 
  
function exponent(b,n)                       //функция
{
  let res = 1;                               
    for (let i =1; i <= n; i++) {
      res = b * res;
    }
    return res;
}                                            
console.log(exponent(2, 2));                 //исполняем функцию, вычисляющую экспоненту от числа