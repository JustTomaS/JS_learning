console.log("Exercise #3");                                                        //Задание 3

console.log("Write a JavaScript function that generates all combinations of a string.");                 
console.log("Example string : 'dog'");
console.log("Expected Output : d,do,dog,o,og,g");
console.log("Answer"); 

function substrings(x) {                                  //заводим функцию
let mas1 = [];
  for (let a = 0, b=1; a < x.length; a++,b++) 
  {
   mas1[a]=x.substring(a, b);
  }
let combine = [];
let vrem= "";
let vichisl = Math.pow(2, mas1.length);
for (let d = 0; d < vichisl ; d++)
{
    vrem= "";
    for (let c=0;c<mas1.length;c++) {
        if ((d & Math.pow(2,c))){ 
            vrem += mas1[c];
          }
      }
    if (vrem !== "")
    {
        combine.push(vrem);
    }
}
  console.log(combine.join("\n"));                   //выводим результат
}
substrings("tester");                                //вызываем функцию      