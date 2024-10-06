const seleniumDriver = require("selenium-webdriver");
const driver = new seleniumDriver.Builder().forBrowser("chrome").build();

/**
 * Opens a website.
 * @param {String} websiteName
 */
async function openWebsite(websiteName) {
  try {
    console.log("Opening the website...");
    await driver.get(websiteName);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Maximizes the browser window.
 */
async function maximizeWebsite() {
  try {
    console.log("Maximizing the browser window...");
    await driver.manage().window().maximize();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Closes the pop-up window.
 */
async function closePopUpWindow() {
  try {
    console.log("Closing the pop-up window...");
    let element = await driver.findElement(
      seleniumDriver.By.className("eu-cookie-compliance-reject-button")
    );
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Clicks on the link with the provided innerText.
 * @param {String} txt The innerText property of the link element
 */
async function clickLink(txt) {
  try {
    console.log("Clicking on link text: " + txt + " ...");
    let element = await driver.findElement(seleniumDriver.By.linkText(txt));
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Returns to main page.
 */
async function goBackToMainPage() {
  try {
    console.log("Navigating back to main page...");
    await driver.navigate().back();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Closes the browser window.
 */
async function closeBrowser() {
  try {
    console.log("Closing browser window...");
    await driver.close();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  openWebsite,
  maximizeWebsite,
  closePopUpWindow,
  clickLink,
  goBackToMainPage,
  closeBrowser,
};
