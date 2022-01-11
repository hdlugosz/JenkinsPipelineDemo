const { browser, element, ExpectedConditions } = require("protractor");

let homepage = require("../pages/homepage");

describe("demo calculator tests", function () {
  it("addition test", function () {
    //browser.get("http://localhost:3456");
    homepage.get("https://juliemr.github.io/protractor-demo/");
    homepage.enterFirstNumber("2");
    homepage.enterSecondNumber("4");
    homepage.clickGo();
    homepage.verifyResult("6");
    //element(by.model("first")).sendKeys("2");

    //element(by.model("operator")).click();

    //element(by.css('[value="MODULO"]')).click();

    //element(by.model("second")).sendKeys("3");

    //element(by.css('[ng-click="doAddition()"]')).click();

    //let result = element(by.cssContainingText(".ng-binding", "2"));

    //expect(result.getText()).toEqual("2");

    browser.sleep(2000);
  });
});
