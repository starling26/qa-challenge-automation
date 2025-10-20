# EXERCISE 2 - PARABANK CONTACT FORM
## Detailed Test Cases & Test Run Report

---

### SHEET 1: TEST PLANNING

| Section | Details |
|---------|---------|
| **Project Name** | ParaBank QA Automation - Contact Validation |
| **Website** | https://parabank.parasoft.com/parabank/index.htm |
| **Target URL** | https://parabank.parasoft.com/parabank/contact.htm |
| **Test Environment** | Demo |
| **Testing Types** | Automated Functional Testing |
| **Start Date** | Saturday 18/10/2025 |
| **End Date** | Sunday 19/10/2025 |
| **QA Engineer** | Starling De La Cruz |
| **Browsers Tested** | Chrome (Chromium), Firefox, WebKit (Safari), Chrome Mobile (Pixel 5), Safari Mobile (iPhone 12) |
| **Automation Framework** | Playwright 1.40 |
| **Language** | TypeScript 5.3 |
| **Test Runner** | Playwright Test Runner |

**Features Under Test:**
1. Contact form field validation
2. Form submission (empty, invalid, valid)
3. Security testing (XSS prevention)
4. Field accessibility and UI validation
5. Character limit validation
6. Required field indicators
7. Button functionality
8. Form reset/clear behavior
9. Telephone field validation
10. Email format validation

**Test Objectives:**
- Validate contact form functionality
- Ensure proper validation on all input fields
- Test security measures against XSS attacks
- Verify UI/UX elements are properly displayed
- Ensure cross-browser compatibility

**Test Deliverables:**
- 12 automated test cases
- Test execution report (HTML)
- Screenshots/videos on failures
- Detailed step-by-step documentation

**Risks & Assumptions:**
- ParaBank demo site may be unstable
- Form structure may change without notice
- Network connectivity issues
- Site downtime affecting test execution
- Contact form is publicly accessible
- Form behavior is consistent across browsers


### SHEET 4: AUTOMATION FRAMEWORK DETAILS

| Section | Details |
|---------|---------|
| **Framework** | Playwright 1.40 |
| **Language** | TypeScript 5.3 |
| **Test Runner** | Playwright Test Runner |
| **Design Pattern** | Page Object Model (implícito) |
| **Reporting** | test.step() for detailed reporting |
| **Version Control** | Git |
| **Node Version** | 18+ |

**Test Scope - In Scope:**
- Contact form field validation
- Form submission (empty, invalid, valid)
- Security testing (XSS prevention)
- Field accessibility and UI validation
- Character limit validation
- Required field indicators
- Button functionality
- Form reset/clear behavior
- Telephone field validation
- Email format validation

**Test Scope - Out of Scope:**
- Backend API testing
- Database validation
- Email delivery confirmation
- Performance testing
- Load testing
- User authentication flows

**Entry Criteria:**
- Node.js 18+ installed
- Playwright browsers installed
- Contact form accessible at ParaBank
- Test environment stable
- VS Code with Playwright extension (optional)

**Exit Criteria:**
- All 12 test cases executed
- Pass rate > 80%
- Critical bugs documented
- Test report generated (HTML)
- Screenshots/videos captured on failures


---

### SHEET 6: EXECUTION SUMMARY

| Metric | Value |
|--------|-------|
| **Total Test Cases** | 12 |
| **Executed** | [TO UPDATE] |
| **Passed** | [TO UPDATE] |
| **Failed** | [TO UPDATE] |
| **Blocked** | [TO UPDATE] |
| **Not Executed** | [TO UPDATE] |
| **Pass Rate** | [TO CALCULATE] |
| **Critical Bugs** | [TO UPDATE] |
| **High Priority Bugs** | [TO UPDATE] |
| **Medium Priority Bugs** | [TO UPDATE] |


**Test Strategy Details:**
- **Approach**: Automated end-to-end testing with Playwright
- **Execution**: On-demand and pre-deployment
- **Retry Strategy**: 2 retries on CI, 0 locally
- **Reporting**: HTML reports with screenshots/videos on failures
- **Evidence**: Screenshots captured for all test steps

---

## INSTRUCTIONS FOR USE:

1. Create Google Spreadsheet with 8 sheets
2. Copy each section to corresponding sheet
3. Update with YOUR actual test results
4. Add colors for visual clarity
5. Take screenshots for evidence
6. Link to Trello bugs
7. Share with view permissions