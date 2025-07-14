const { defineConfig } = require("@playwright/test");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = defineConfig({
  testDir: "./tests", // ← де лежать твої тести *.spec.js
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "https://www.redmine.org",
  },
  reporter: [["list"], ["html", { open: "never" }], ["allure-playwright"]], 
});
