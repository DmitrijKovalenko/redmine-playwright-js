
# Redmine Playwright Tests

This repository contains automated tests for [redmine.org](https://www.redmine.org) using [Playwright](https://playwright.dev/) with JavaScript and Allure reporting.

## 🔧 Installation

Make sure you have Node.js ≥18 installed.

```bash
git clone https://github.com/DmitrijKovalenko/redmine-playwright-js.git
cd redmine-playwright-js
npm install
npx playwright install --with-deps
```

## 🚀 Running Tests

```bash
npm test
```

## 📊 Allure Reports

Generate and open report locally:

```bash
npm run allure:generate
npm run allure:open
```

Reports are also automatically published via GitHub Pages to the `gh-pages` branch after each push to `master`. You can access the latest report [here](https://dmitrijkovalenko.github.io/redmine-playwright-js/).

## 🧪  Project Structure

```
.
├── tests/              # Playwright test specs
├── pages/              # Page Object Model files
├── .github/workflows/  # GitHub Actions CI config
├── allure-results/     # Raw allure results (gitignored)
├── allure-report/      # HTML report (gitignored)
├── README.md
└── package.json
```

## ✏️ Notes

- Make sure `node_modules`, `allure-results`, and `allure-report` are ignored in `.gitignore`.
- GitHub Actions CI automatically runs tests and deploys Allure reports to GitHub Pages.
- The project follows POM (Page Object Model) principles to keep tests clean and maintainable.

---

Created by **Dmitrij Kovalenko**
