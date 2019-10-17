console.log("Exercise #5");                                                        //Задание 5

console.log("Write a JavaScript function that accepts a string as a parameter and converts"); 
console.log("the first letter of each word of the string in upper case.");
console.log("Example string : 'the quick brown fox'");
console.log("Expected Output : 'The Quick Brown Fox '");
console.log("Answer"); 

function bolshiye_bukvi (b) {                                                      //объявляем функцию
    let znach_m = b.split(' ');                                                    //разбиваем значения
    let rez_mas = [];                                                              //здесь будет результат
      
    for(let x = 0; x < znach_m.length; x++){                                       
      rez_mas.push(znach_m[x].charAt(0).toUpperCase()+znach_m[x].slice(1));
    }
    return rez_mas.join(' ');                                                       //соединяем воедино
  }
console.log(bolshiye_bukvi(`Первые буковки стали большими`));                       //выводим результат
