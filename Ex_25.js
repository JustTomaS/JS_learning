console.log("Exercise #25");                  //Задание 25

console.log("Write a JavaScript function that accept a list of country names as input and returns the longest country name as output"); 
console.log("Answer"); 
  
function samoe_dlinnoye_nazvaniye(strana)
  {
  return strana.reduce(function(name, country) 
  {
    return name.length > country.length ? name : country;
  }
  );
}
console.log(samoe_dlinnoye_nazvaniye(["Россия", "USA", "ОАЭ"]));            //выводим результат самого длинного названия