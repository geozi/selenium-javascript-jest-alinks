const website = require("../src/linkTestSuite");
const TIME_IN_SECONDS = 20 * 1000;
jest.setTimeout(TIME_IN_SECONDS);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

afterEach(async () => {
  await delay(5000); // 5 seconds delay
});

test("Testing website opening", async () => {
  let action = website.openWebsite("https://www.nokia.com/");
  await expect(action).resolves.not.toThrow();
});

test("Testing browser window maximization", async () => {
  let action = website.maximizeWebsite();
  await expect(action).resolves.not.toThrow();
});

test("Testing popUpWindow closing", async () => {
  let action = website.closePopUpWindow();
  await expect(action).resolves.not.toThrow();
});

const links = [
  "5G core (5GC)",
  "Data center networks",
  "Mobile networks",
  "Network slicing",
  "Service management and orchestration (SMO)",
  "AI and analytics",
  "Fixed networks",
  "Network automation",
  "Optical networks",
  "Solutions for industry",
  "Autonomous networks",
  "IP networks",
  "Network security",
  "Private networks",
];

for (let linkText of links) {
  test("Testing link clicking", async () => {
    let action = website.clickLink(linkText);
    await expect(action).resolves.not.toThrow();
  });

  test("Testing returning to main page", async () => {
    let action = website.goBackToMainPage();
    await expect(action).resolves.not.toThrow();
  });
}

test("Testing browser window closing", async () => {
  let action = website.closeBrowser();
  await expect(action).resolves.not.toThrow();
});
