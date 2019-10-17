console.log("Функции");                                                               //Функции

console.log("Обязателен ли else?");
/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }                                              */
  console.log("Будет ли эта функция работать как-то иначе, если убрать else?");
  
  /* function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }                                               */
console.log("Ответ: нет, работа будет одинакова, else ничего не поменяет"); 

console.log("Перепишите функцию, используя оператор '?' или '||'");

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }
console.log("Вариант с ?");

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
console.log("Вариант с ||");
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }
  
console.log("Функция min(a, b)"); 
console.log("Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b."); 
console.log("min(2, 5) == 2"); 
console.log("min(3, -1) == -1"); 
console.log("min(1, 1) == 1"); 
console.log("Решение");

function min (a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log("Можно и так");
function min (a, b) {
    return (a < b) ? a : b;
  }

console.log("Функция pow(x,n)"); 
console.log("Напишите функцию pow(x,n), которая возвращает x в степени n."); 
console.log("Иначе говоря, умножает x на себя n раз и возвращает результат."); 
console.log("pow(3, 2) = 3 * 3 = 9"); 
console.log("pow(3, 3) = 3 * 3 * 3 = 27"); 
console.log("pow(1, 100) = 1 * 1 * ...* 1 = 1"); 
console.log("Решение"); 

let n, m;
function pow (n, m) {
    let res = n;
    for (let i = 1; i < m; i++) {
        result *= n;
      }
    return res;
    }
n = prompt ("n?");
m = prompt ("m?");
    if (m < 1) {
        console.log(`Числа со степенью ${m} не поддерживаются, используйте натуральные числа`);
      } else {
        console.log(pow(n, m));
      }

console.log("Перепишите с использованием функции-стрелки");
console.log("Замените код Function Expression стрелочной функцией");
/* 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/
console.log("Решение");

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );