const { test, expect, chromium } = require("@playwright/test");
const { MainPage } = require("../pages/mainPage");
const { LoginPage } = require("../pages/loginPage");
const { UserPage } = require("../pages/userPage");
const { AccountPage } = require("../pages/accountPage");

test.describe("account tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.redmine.org");
  });

  test("should open change password page", async ({ page }) => {
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
    expect(page).toHaveURL("https://www.redmine.org/my/account");
    const accounPage = new AccountPage(page);
    await expect(accounPage.changePassword).toBeVisible();
    await accounPage.clickChangePassword();
    expect(page).toHaveURL("https://www.redmine.org/my/password");
    const changePasswordHeading = page.locator("h2", {
      hasText: "Змінити пароль",
    });
    await expect(changePasswordHeading).toBeVisible();
    
  });
  
  test("should open change twoFA page", async ({ page }) => {
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
    expect(page).toHaveURL("https://www.redmine.org/my/account");
    const accounPage = new AccountPage(page);
    await expect(accounPage.twoFA).toBeVisible();
    await accounPage.clickTwoFA();
    expect(page).toHaveURL(
      "https://www.redmine.org/my/twofa/totp/activate/confirm"
    );
    const enableTwoFAHeading = page.locator("h2", {
      hasText: "Enable two-factor authentication",
    }); //сторінка не на українській мові!
    await expect(enableTwoFAHeading).toBeVisible();
  });

  test("should open delete account page", async ({ page }) => {
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
    expect(page).toHaveURL("https://www.redmine.org/my/account");
    const accounPage = new AccountPage(page);
    await expect(accounPage.deleteAccount).toBeVisible();
    await accounPage.clickCDeleteAccount();
    expect(page).toHaveURL("https://www.redmine.org/my/account/destroy");
    const deleteHeading = page.locator("p", {
      hasText:
        "Ваш обліковий запис буде повністю видалений без можливості відновлення.",
    });
    await expect(deleteHeading).toBeVisible();
  });
});
