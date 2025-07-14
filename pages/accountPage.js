class AccountPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.twoFA = page.locator('a[href="/my/twofa/totp/activate/init"]');
    this.changePassword = page.locator(".icon.icon-passwd");
    this.deleteAccount = page.locator(".icon.icon-del");
  }

  async clickTwoFA() {
    await this.twoFA.click();
  }
  async clickChangePassword() {
    await this.changePassword.click();
  }
  async clickCDeleteAccount() {
    await this.deleteAccount.click();
    }
    

}
module.exports = { AccountPage };
