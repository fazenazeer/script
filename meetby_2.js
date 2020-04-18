var webdriver = require('selenium-webdriver');
var chromeCapabilities = webdriver.Capabilities.chrome();

var chromeOptions = {'args': ['--test-type', '--disable-web-security','--allow-file-access-from-files','--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream']};


chromeCapabilities.set('chromeOptions', chromeOptions);

webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get("https://meetby.io/app/join")
     //driver.manage().window().setRect(2560, 1370)

driver.sleep(3000).then(function() {
     driver.findElement(By.css(".d-flex:nth-child(3) .form-control")).click()
});
driver.sleep(3000).then(function() {
     driver.findElement(By.css(".d-flex:nth-child(3) .form-control")).sendKeys("3763182468")
});
driver.sleep(3000).then(function() {
     driver.findElement(By.css(".d-flex:nth-child(4) .form-control")).click()
});
driver.sleep(3000).then(function() {
     driver.findElement(By.css(".d-flex:nth-child(4) .form-control")).sendKeys("Faiz1")
});
driver.sleep(5000).then(function() {
     driver.findElement(By.css(".btn-success")).click()
});
driver.sleep(10000).then(function() {
	driver.findElement(By.css(".mb-3")).click()
});


driver.sleep(1000*60*60*5).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'webdriver - Meetby Test') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
});
