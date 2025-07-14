const { test, expect, chromium } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { MainPage } = require("../pages/mainPage");


test.describe("Login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.redmine.org");
  });

  test("should show error with empty username and remember me on", async ({
    page,
  }) => {
    expect(page).toHaveURL("https://www.redmine.org");
    const mainPage = new MainPage(page);
    await mainPage.clickLogin();
    expect(page).toHaveURL("https://www.redmine.org/login");
    const loginPage = new LoginPage(page);
    await loginPage.username.fill("");
    await loginPage.password.fill("Redmine777");
    await loginPage.clickStayAtSys();
    await loginPage.loginSubmit.click();
    const errorMsg = page.locator("#flash_error");
    await expect(errorMsg).toHaveText("Invalid user or password");
  });

  test("should show error with empty password and remember me off", async ({
    page,
  }) => {
    expect(page).toHaveURL("https://www.redmine.org");
    const mainPage = new MainPage(page);
    await mainPage.clickLogin();
    expect(page).toHaveURL("https://www.redmine.org/login");
    const loginPage = new LoginPage(page);
    await loginPage.username.fill("DmytroKovalenko");
    await loginPage.password.fill("");
    await loginPage.loginSubmit.click();
    const errorMsg = page.locator("#flash_error");
    await expect(errorMsg).toHaveText("Invalid user or password");
  });

  test("should show error with too small input and remember me off", async ({
    page,
  }) => {
    expect(page).toHaveURL("https://www.redmine.org");
    const mainPage = new MainPage(page);
    await mainPage.clickLogin();
    expect(page).toHaveURL("https://www.redmine.org/login");
    const loginPage = new LoginPage(page);
    await loginPage.username.fill("x");
    await loginPage.password.fill("y");
    await loginPage.loginSubmit.click();
    const errorMsg = page.locator("#flash_error");
    await expect(errorMsg).toHaveText("Invalid user or password");
  });

  test("should show error with too big input and remember me on", async ({
    page,
  }) => {
    expect(page).toHaveURL("https://www.redmine.org");
    const mainPage = new MainPage(page);
    await mainPage.clickLogin();
    expect(page).toHaveURL("https://www.redmine.org/login");
    const loginPage = new LoginPage(page);
    await loginPage.username.fill("x".repeat(256));
    await loginPage.password.fill("y");
    await loginPage.clickStayAtSys();
    await loginPage.loginSubmit.click();
    const errorMsg = page.locator("#flash_error");
    await expect(errorMsg).toHaveText("Invalid user or password");
  });

  test("should login with valid data and remember me on", async ({ page }) => {
    expect(page).toHaveURL("https://www.redmine.org");
    const mainPage = new MainPage(page);
    await mainPage.clickLogin();
    expect(page).toHaveURL("https://www.redmine.org/login");
    const loginPage = new LoginPage(page);
    await loginPage.username.fill("DmytroKovalenko");
    await loginPage.password.fill("Redmine777");
    await loginPage.clickStayAtSys();
    await loginPage.loginSubmit.click();
    expect(page).toHaveURL("https://www.redmine.org");
    const username = page.locator("#loggedas .user.active");
    expect(username).toHaveText("DmytroKovalenko");
    

 
      });
    });

