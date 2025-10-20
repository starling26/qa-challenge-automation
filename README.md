# qa-challenge-automation
# 🎭 QA Challenge - How to Run the Tests

This guide explains, step-by-step, how to prepare the environment and run the Playwright + TypeScript test suite for the ParaBank contact form.

---

## Prerequisites
- Node.js 18+ and npm (or Yarn)
- Git
- Recommended: VS Code with the Playwright extension
- Network access to: https://parabank.parasoft.com

---

## 1. Clone the repository
```bash
git clone https://github.com/starlingdelacruz/qa-challenge-automation.git
cd qa-challenge-automation
code .
```

---

## 2. Install dependencies and browsers
```bash
# Install Node dependencies
npm ci

# Install Playwright browsers and test runner dependencies
npx playwright install
```

If you prefer npm install:
```bash
npm install
npx playwright install
```

---

## 3. Configure environment (optional)
Set the target base URL and any timeouts via environment variables or a .env file. Example using environment variables:
```bash
export BASE_URL="https://parabank.parasoft.com"
export PWDEBUG=0       # set to 1 when debugging
```
If the project includes a config file (playwright.config.ts), verify BASE_URL is referenced there.

---

## 4. Run the full test suite
```bash
npx playwright test
```

To run with the UI report opened after the run:
```bash
npx playwright test --reporter=list
npx playwright show-report
```

---

## 5. Run tests in a specific browser or headed mode
- Run in Chromium, Firefox, and WebKit:
    ```bash
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    ```
- Run headed (visible browser) for debugging:
    ```bash
    npx playwright test --headed
    ```

---

## 6. Run a single test file or a single test case
- Single file:
    ```bash
    npx playwright test tests/contact.spec.ts
    ```
- Single test by name (grep):
    ```bash
    npx playwright test -g "TC01: Contact form shows validation errors"
    ```

---

## 7. Capture traces, screenshots, and videos
- Enable trace for failing tests:
    ```bash
    npx playwright test --trace on
    ```
- Enable screenshots or video in playwright.config.ts or per-test options. Example command-line options are not universally available; prefer config settings:
    - Screenshots saved to screenshots/ (tests use: await page.screenshot({ path: 'screenshots/name.png' }))
    - Traces saved to trace/ and viewable with:
        ```bash
        npx playwright show-trace trace.zip
        ```

---

## 8. Debugging tips
- Open Playwright inspector:
    ```bash
    npx playwright test --debug
    ```
- Use PWDEBUG=1 to pause on failures:
    ```bash
    PWDEBUG=1 npx playwright test
    ```
- Add console.log statements and use test.step() for visibility into steps.

---

## 9. Common npm scripts (suggested)
Add to package.json for convenience:
```json
"scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:report": "playwright show-report",
    "test:trace": "playwright test --trace on"
}
```

---

## 10. Where to find results and evidence
- HTML report: open with `npx playwright show-report` (default folder: playwright-report/)
- Screenshots: screenshots/ (tests save before/after images)
- Trace files: traces/ (open with playwright show-trace)

---

## 11. Troubleshooting
- Browser install errors: re-run `npx playwright install` and ensure network access.
- Flaky failures: add waits like waitForLoadState('networkidle') or fallback locators.
- Permission errors: check file/directory permissions for screenshots and reports.

---

## 12. Additional resources
- Playwright docs: https://playwright.dev
- Project repository: https://github.com/starlingdelacruz/qa-challenge-automation

---

Follow these steps to reliably install, run, and debug the test suite. Adjust BASE_URL and timeouts as needed for your environment..