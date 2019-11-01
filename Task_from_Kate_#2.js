console.log("Код принимает дату рождения в формате дд.мм.гггг");
console.log("Реализовать вывод каждого прошеднего года и дня недели");
console.log("в формате `гггг: день_недели до нынешней даты`");


let data = `08.03.1991`;                                       //задаем дату

//записываем в объект, преобразовываем в нужный формат
let birth_date = new Date(data.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')); 

let now_date = new Date();                                     //текущая дата

function dayOfWeek() {                                         //функция получения дней недели
    let days = ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[birth_date.getDay()];
  }

  //пока заданная дата < текущей, прибавляем год
  for ( (birth_date == birth_date) ; (birth_date.getTime()) < (now_date.getTime()) ; (birth_date.setFullYear(birth_date.getFullYear() + 1)) ) {
    
    //выводим результат
    console.log( birth_date.getFullYear() + ` : ` + (dayOfWeek(birth_date)) );      
}