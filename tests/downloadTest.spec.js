const { test, expect, chromium } = require("@playwright/test");
const { MainPage } = require("../pages/mainPage");

test.describe("account tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.redmine.org");
  });

  test.describe("Download tests", () => {
    test("Should initiate a successful download when clicking the “Download” link for the latest Redmine release", async ({page,}) => {
      expect(page).toHaveURL("https://www.redmine.org");

      const mainPage = new MainPage(page);
      await mainPage.clickDownload();
      expect(page).toHaveURL("https://www.redmine.org/projects/redmine/wiki/Download");
      const [response] = await Promise.all([
        page.waitForResponse(
          (resp) => resp.url().endsWith(".zip") && resp.status() === 200
        ),
        page.click('a[href="/releases/redmine-5.0.13.zip"]'),
      ]);

      expect(response.ok()).toBeTruthy();
      expect(response.headers()["content-type"]).toMatch(
        /application\/zip|application\/octet-stream/
      );
    });
  });
});
