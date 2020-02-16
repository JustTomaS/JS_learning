//определяем фреймворк, браузер, файл спеки для запуска
exports.config = {
  directConnect: true,
  framework: 'jasmine',

  capabilities: {
    browserName: 'chrome'  
  },
  
  specs: ['yandex_task.js']
}; 