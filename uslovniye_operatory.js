console.log("Условные операторы");               //Условные операторы

console.log("Сравнение строк");                  //Сравнение строк

console.log("Раз пример"); 
let best_company = 'Тинькофф';                   //пример if/else
if (best_company == 'Тинькофф') {                //проверится первое условие, если оно верное, то выводится первое сообщение, иначе второе
    console.log( 'Верно! You are great!' );
} else {
    console.log( 'Подумай о смене работы' ); 
}
  
console.log("Два пример");                       //пример if/else if
let rub_var = "Рубль";
let dol_var = "Доллар";
if (rub_var < dol_var) {
    console.log ('Доллары круче');  
  } else if (rub_var > dol_var) {
    console.log ('Рубль деревянный');           //выполнится данное условие
  } else if (rub_var = dol_var) {
    console.log ('Бабосики всегда лучше');
  } else {
    console.log ('Что-то пошло не так');
  }

console.log("Сравнение чисел");                  //Сравнение чисел

console.log("Пример с if/else"); 
let res, a=1, b=2;                              //пример с if/else
if (a + b < 4) {
  res = 'Меньше';                               //выполнится данное условие
} else {
  res = 'Больше';
}
console.log(res);

console.log("Пример с условным оператором ?"); 
let res2, c=1, d=2;
console.log(res2 = (c + d > 2) ? 'Больше' : 'Меньше'); //выполняется первое условие, если оно верное, иначе второе

console.log("Пример со swift");                  //пример со swift
let res3 = 5 + 5;
switch (res3) {
  case 5:
    console.log( 'Не достаточно' );
    break;
  case 7:
    console.log( 'Мало' );
    break;
  case 10:
    console.log( 'Верно!' );                  //выполнится данный блок
    break;
}

console.log("Сравнение bool");                //Сравнение bool 
 
let bool_var, bv1=true, bv2=false;                             
if (bv1 > bv2) {
    bool_var = 'Правда';                     //выполнится данное условие
} else {
    bool_var = 'Ложь';
}
console.log(bool_var);

console.log("Пример с условным оператором ?"); 
let bool_var2, bv3=false, bv4=true;
console.log(bool_var2 = (bv3 > bv4) ? 'Правда' : 'Ложь'); //выполняется второе условие