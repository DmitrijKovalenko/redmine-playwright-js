class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.username = page.locator("#login-form #username");
    this.password = page.locator("#login-form #password");
    this.restorePassword = page.locator('a[href="/account/lost_password"]');
    this.loginSubmit = page.locator("#login-form #login-submit");
    this.stayAtSys = page.locator("#autologin");
  }

  async clickStayAtSys() {
    await this.stayAtSys.click();
  }
}
module.exports = { LoginPage };