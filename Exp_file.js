console.log("Импорт/Экспорт");                  //Импорт/Экспорт
/* Экспортируем данные объекта из данного файла.*/

let devices = {
  device1: `iPhone`,
  color1: 'Space Gray',
  memory1: 128,

  device2: `iPad`,
  color2: 'White',
  memory2: 256,
}
global.apple = devices;                       //объявили глобальную переменную, но лучше не стоит так деалть :)