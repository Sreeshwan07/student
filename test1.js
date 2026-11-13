javascript
const { Builder, By } = require("selenium-webdriver");
async function test() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();
    try {
        await driver.get("file:///C:/Selenium/index.html");
        await driver.findElement(By.id("btn")).click();
        let result = await driver.findElement(By.id("result")).getText();
        if (result === "test pass success") {
            console.log("TEST PASS");
        } else {
            console.log("TEST FAIL");
        }

        console.log("Actual Result:", result);

    } finally {
        await driver.quit();
    }
}

test();