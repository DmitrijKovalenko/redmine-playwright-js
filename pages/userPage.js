class UserPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.myAccount = page.locator(".my-account");
    this.logOut = page.locator(".logout");
  }

  
  async clickMyAccount() {
    await this.myAccount.click();
  }
  async clickLogOut() {
    await this.logOut.click();
  }
}

module.exports = { UserPage };
