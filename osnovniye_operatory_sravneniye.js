console.log("Основные операторы");         //Основные операторы

console.log("Унарный +");                 
let num_var = 5;
console.log( +num_var );                  // 5, ничего не происходит

console.log( +true );                     // 1, не число в число
console.log( +"" );                       // 0

let cats = "5";
let dogs = "7";
console.log(cats + dogs );               // 57, еще пример

let cats2 = "5";
let dogs2 = "7";
console.log(+cats2 + +dogs2 );           // 12, сначала преобразование, затем сложение

console.log("Унарный -");                
let y_minus = 5;
y_minus = -y_minus;
console.log(y_minus);                       // -5

console.log("Бинарный +");
let str_var1="Тинь"+"кофф";
console.log(str_var1);                    //обычное сложение строк

console.log("Присваивание");              
let prisv_var = 5 * 2 + 1;
console.log(prisv_var);                  // 11, сначала вычисления, затем присваивание

let easy_prisv = 10;                     // упрощенное присваивание         
easy_prisv += 5;                         // 15
easy_prisv *= 2;                         // 20
console.log(easy_prisv); //



console.log("Остаток от деления");        
console.log(10 % 2);                    // 0, без остатка
console.log(5 % 2);                     // 1, остаток от деления

console.log("Возведение в степень");      
console.log( 4 ** 4 );                  // 256
console.log( 5 ** 2 );                  // 25

console.log("Инкремент");                 
let inkret_var = 4;
inkret_var++;                             // увеличение на единицу
console.log(inkret_var);                  // 5

let inkret_var2 = 5;
let znach=++inkret_var2;                   // префиксная форма
console.log(znach);                        // 6

let inkret_var3 = 4;
let znach2=inkret_var3++;                   // постфиксная форма, не увеличивает
console.log(znach2);                       // 4


console.log("Декремент");                 
let dekrem_var = 4;
dekrem_var--;                             // уменьшение на единицу
console.log(dekrem_var);                  // 3

console.log("Запятая");                   
let zapataya = (5 + 5, 3 + 2);
console.log(zapataya);                   // 5, первое выражение не выполняется


console.log("Операторы сравнения");      //Операторы сравнения

console.log("Больше/меньше");           
console.log( 5 > 1 );                    // true
console.log( 3 < 1 );                    // false

let x = 7 > 5;
console.log(x);                          // true

console.log("Больше/меньше или равно");  
console.log( 10 >= 1 );                    // true, >=
console.log(  5 <= 10 );                   // true, <=

console.log("Равно");                    
console.log( 3 == 1 );                    // false

console.log("Не равно");   
console.log( 4 != 1 );                    // true

console.log("Сравнение строк");          
console.log('Б' > 'А');                   // false
console.log('Под' > 'Пот');               // true

console.log("Сравнение разных типов");   
console.log( true == 1 );                 // true
console.log( false == 1 );                // false

console.log("Строгое сравнение");        
console.log( 0 == false );                // true, вот дичь
console.log( "" == false );               // true, вот дичь №2
console.log( 0 === false );               // false, а тут норм

console.log("null и undefined");     
console.log( null === undefined );        // false, строгое сравнение 
console.log( null == undefined );         // true
console.log( null == 0 );                 // false
console.log( null >= 0 );                 // true
console.log( undefined >= 0 );            // false
console.log( undefined == 0 );            // false