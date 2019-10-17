console.log("Exercise #20");                  //Задание 20

console.log("Write a JavaScript function that generates a string id (specified length) of random characters."); 
console.log("Sample character list : ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
console.log("Answer"); 
  
function id_gen(a) {
let b = "", samples = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(let c=0; c < a; c++ ) {  
b += samples.charAt(Math.floor(Math.random() * samples.length));
}
return b;
}
console.log(id_gen(8));                            //генерируем id из указанного набора знаков