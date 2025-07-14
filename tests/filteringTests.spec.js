const { test, expect, chromium } = require("@playwright/test");
const { MainPage } = require("../pages/mainPage");

test.describe("account tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.redmine.org");
  });

  test.describe("Issues filtering tests", () => {
    test(" should correctly filter the issues list and status when applying search filters", async ({
      page,
    }) => {
      const mainPage = new MainPage(page);
      await mainPage.clickIssues();
      expect(page).toHaveURL("https://www.redmine.org/projects/redmine/issues");

      const checkbox = page.locator("#cb_status_id");
      const isChecked = await checkbox.isChecked();
      if (!isChecked) {
        await checkbox.check();
      }
      const statusSelect = page.locator("#operators_status_id");
      await statusSelect.selectOption("c");
      const accept = page.locator(".buttons .icon.icon-checked");
      await accept.click();
      
    });
  });
});