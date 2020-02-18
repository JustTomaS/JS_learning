describe(`Яндекс тест`, function() {
  
//определяем, куда будем заходить
browser.waitForAngularEnabled(false);
browser.get(`https://www.yandex.ru/`);
  
//забиваем необходимые локаторы в переменные
let eshyo = element(by.css(`.home-tabs .home-tabs__more-switcher`));
let location = element(by.css(`.row .geolink`));
let strana = element(by.css(`.form_type_geo`));
let gorod = element(by.css(`[id="city__front-input"]`));

 
it(`сравниваем вкладки еще`, function() {
    
  function getContent(country) {
    let result = protractor.ExpectedConditions;

    //кликаем на кнопку смены локации
    browser.wait(result.elementToBeClickable(location), 2000);
    location.click();
   
    //ищем нужный город и выбираем из списка
    browser.wait(result.elementToBeClickable(gorod), 2000);
    gorod.clear();
    gorod.sendKeys(country);
    strana.submit();
    
    //кликаем на кнопку "еще" на главной странице
    browser.wait(result.elementToBeClickable(eshyo), 2000);
    eshyo.click();
      
    //ждем вывода попапа после нажатия на "еще", запоминаем элементы попапа
    browser.wait(result.visibilityOf(element(by.css(`.popup2 .home-tabs__more`))), 4000);
    let content = element(by.css(`.popup2 .home-tabs__more`)).all(by.tagName(`a`)).getText();
    return content

  }

//вводим значения городов
  let paris_city = getContent(`Париж`);
  let london_city = getContent(`Лондон`);

//сверяем результаты
  expect(paris_city).toEqual(london_city);

//вытаскиваем результат Парижа и Лондона в консоль  
  paris_city.then((expect)=> console.log(expect));
  london_city.then((expect)=> console.log(expect));
});
});