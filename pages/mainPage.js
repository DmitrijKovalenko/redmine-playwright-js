class MainPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.loginBtn = page.locator('a[href="/login"]');
    this.myAccount = page.locator(".my-account");
    this.logOut = page.locator(".logout");
    this.download = page.locator(".download");
    this.issues = page.locator('a[href="/projects/redmine/issues"]');
  }

  async clickLogin() {
    await this.loginBtn.click();
  }
  async clickMyAccount() {
    await this.myAccount.click();
  }
  async clickLogOut() {
    await this.logOut.click();
  }
  async clickDownload() {
    await this.download.click();
  }
  async clickIssues() {
    await this.issues.click();
  }
}

module.exports = { MainPage };
