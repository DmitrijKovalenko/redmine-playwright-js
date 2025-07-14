const { test, expect, chromium } = require("@playwright/test");
const { MainPage } = require("../pages/mainPage");
const { LoginPage } = require("../pages/loginPage");
const { UserPage } = require("../pages/userPage");
const { AccountPage } = require("../pages/accountPage");

test.describe("Login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.redmine.org");
  });

  test("Should restrict access to account page after logout", async ({page,}) => {
    expect(page).toHaveURL("https://www.redmine.org");
    const mainPage = new MainPage(page);
    await mainPage.clickLogin();
    expect(page).toHaveURL("https://www.redmine.org/login");
    const loginPage = new LoginPage(page);
    await loginPage.username.fill("DmytroKovalenko");
    await loginPage.password.fill("Redmine777");
    await loginPage.clickStayAtSys();
    await loginPage.loginSubmit.click();
    const userPage = new UserPage(page);
    await userPage.clickMyAccount();
    const userUrl = page.url;
      console.log("Поточний URL:", userUrl);
      await userPage.clickLogOut();
      await page.goBack(); ///// баг повертає на сторінку юзера
    
      
      
  });
  test("Should not expose sensitive user data through direct URL", async ({
    page,
  }) => {
      await page.goto("https://www.redmine.org/users/1");  
      const login = page.locator(".splitcontentleft ul li:nth-child(1)");
      const email = page.locator(".splitcontentleft ul li:nth-child(2)");
      const loginText = await login.textContent();
      const emailText = await email.textContent();
      console.log("Here should be a blank space,not a login :" + loginText);
      console.log("Here should be a blank space, not an email :" + emailText);

      
  });
    
    
});
