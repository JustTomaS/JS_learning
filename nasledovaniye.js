console.log("Наследование");                  //Наследование


console.log("Что такое __proto__");
console.log("Объекты можно организовывать в цепочки,");
console.log("чтобы одно свойство объекта можно было найти в другом.");
console.log("__proto__ это свойство, которое служит связующим звеном между свойствами объектов.");
console.log("Вариант №2: __proto__ это свойство, указывающее на объект,"); 
console.log("который использовался в качестве прототипа при инстанцировании объекта.");


console.log("Что такое prototype");
console.log("prototype - это свойство, указывающее, откуда");
console.log("брать прототип при создании объекта.");
console.log("Например, указав Something.prototype = some_stuff, мы говорим,");
console.log("что все новые объекты класса Something будут иметь прототип some_stuff");


console.log("Есть объект a с набором свойств, объект b должен унаследовать свойства a");

class Cars {                                              //объявляем класс
  constructor(mark) {
    this.mark = mark;
    this.speed = 0;
  }
  skorost(speed) {
    this.speed += speed;
    console.log(`${this.mark} достигает скорости ${this.speed}.`);
  }
}

class Lada extends Cars {                                  //наследуемся от Cars
  broke() {
    console.log(`${this.mark} часто ломается`);
  }
}

class Bugatti extends Cars {                               //наследуемся от Cars
  cool_car() {
    console.log(`${this.mark} крутая тачка`);
  }
}

let lada = new Lada (`Девятка`);                           
let bugatti = new Bugatti (`Bugatti Veyron`);              

//используем методы из прототипа и наследника
bugatti.cool_car ();                                       
bugatti.skorost (407);                       

//используем методы из прототипа и наследника
lada.skorost(150);
lada.broke();      