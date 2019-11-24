console.log("Exceptions");                  //Exceptions

console.log("Завернуть в try/catch 1/0 и вывести на ноль делить нельзя");

try {
  1 / 0;
  if (Infinity);
  throw new Error(`На ноль делить нельзя!`);
} catch(err) {
  console.log(`Ошибка: ` + err.message )
}