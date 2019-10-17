console.log("Exercise #4");                                                        //Задание 4

console.log("Write a JavaScript function that returns a passed string with letters in alphabetical order.");                 
console.log("Example string : 'webmaster'");
console.log("Expected Output : 'abeemrstw'");
console.log("Answer"); 

function alfavit_sort (h) {                                   //объявляем функцию
    return h.split(``).sort().join(``);                       //разделяем на символы, сортируем, соединяем
  }
console.log(alfavit_sort(`auto sort is awesome`));            //выводим результат
