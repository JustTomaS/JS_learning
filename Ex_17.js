console.log("Exercise #17");                  //Задание 17

console.log("Write a JavaScript function to get the number of occurrences of each letter in specified string."); 
console.log("Answer"); 
  
function unik_char(a) {
  let bukv = {};
  a.replace(/\S/g, function(l){bukv[l] = (isNaN(bukv[l]) ? 1 : bukv[l] + 1);});
  return bukv;
}
console.log(unik_char("Wow! It`s amazing! Function is made unic letters for us"))