# 📸 Screenshots for Failing Tests

## 🎯 Improvements Implemented
```
screenshots/
├── tc013-current-page-state.png
├── tc013-login-verification-failed.png
├── tc014-before-table-validation.png
├── tc014-table-validation-failed.png
├── tc017-before-transfer-link-search.png
├── tc017-transfer-link-not-found.png
├── tc018-before-transfer-navigation.png
├── tc018-accounts-overview.png
├── tc018-transfer-form-ready.png
├── tc018-amount-entered.png
├── tc018-accounts-selected.png
├── tc018-before-transfer-submit.png
├── tc018-after-transfer-submit.png
├── tc018-transfer-result.png
├── tc018-transfer-success.png
├── tc018-final-state.png
├── tc019-transfer-navigation-failed.png
├── tc020-transfer-navigation-failed.png
└── [test-name]-final-failure-state.png (automatic)
```a comprehensive screenshot system for all currently failing tests, especially those related to login and transfers.

### 🔧 Modifications Made

#### 1. Global Hook (afterEach)
- ✅ **Automatic capture** for any test that fails
- ✅ **Descriptive filename** based on the test title
- ✅ **Additional debug info** (URL, page title)

#### 2. Improved Specific Tests

##### TC_AUTO_013 (Login Test)
- 📸 `tc013-current-page-state.png` - Page state before verification
- 📸 `tc013-login-verification-success.png` - If login is successful
- 📸 `tc013-login-verification-failed.png` - If login fails
- 🔍 **Additional debug**: Page content and current URL

##### TC_AUTO_014 (Table Structure)
- 📸 `tc014-before-table-validation.png` - Before validating the table
- 📸 `tc014-table-validation-success.png` - If the table is found
- 📸 `tc014-table-validation-failed.png` - If the table is not found
- 🔍 **Additional debug**: Total number of tables found

##### TC_AUTO_017 (Fund Transfer Access)
- 📸 `tc017-before-transfer-link-search.png` - Before searching for the link
- 📸 `tc017-transfer-navigation-success.png` - If the link is found
- 📸 `tc017-transfer-link-not-found.png` - If the link is not found
- 🔍 **Additional debug**: List of all available links

##### **TC_AUTO_018 (Transfer Between Accounts) - ENHANCED**
- 📸 `tc018-before-transfer-navigation.png` - Before navigating
- 📸 `tc018-transfer-page-loaded.png` - If the page loads
- 📸 `tc018-transfer-navigation-failed.png` - If navigation fails
- 📸 `tc018-accounts-overview.png` - View of available accounts
- 📸 `tc018-no-accounts-found.png` - If there are not enough accounts
- 📸 `tc018-transfer-form-ready.png` - Form ready for input
- 📸 `tc018-amount-entered.png` - After entering amount
- 📸 `tc018-accounts-selected.png` - Selected accounts
- 📸 `tc018-insufficient-account-options.png` - Not enough account options
- 📸 `tc018-before-transfer-submit.png` - Before submit
- 📸 `tc018-after-transfer-submit.png` - After submit
- 📸 `tc018-transfer-result.png` - Result page
- 📸 `tc018-transfer-success.png` - If successful
- 📸 `tc018-transfer-error.png` - If there is an error
- 📸 `tc018-transfer-unknown-state.png` - Unknown state
- 📸 `tc018-final-state.png` - Final state of the test
- 📸 `tc018-verification-failed.png` - If verification fails
- 🔍 **Additional debug**: Account options, page content, URLs

##### TC_AUTO_019 (Negative Amount Validation)
- 📸 `tc019-before-transfer-navigation.png` - Before navigating
- 📸 `tc019-transfer-page-loaded.png` - If the page loads
- 📸 `tc019-transfer-navigation-failed.png` - If navigation fails

##### TC_AUTO_020 (No Account Selection)
- 📸 `tc020-before-transfer-navigation.png` - Before navigating
- 📸 `tc020-transfer-page-loaded.png` - If the page loads
- 📸 `tc020-transfer-navigation-failed.png` - If navigation fails

## 📁 Screenshot Structure

All screenshots are saved in the `screenshots/` folder with descriptive names:

```
screenshots/
├── tc013-current-page-state.png
├── tc013-login-verification-failed.png
├── tc014-before-table-validation.png
├── tc014-table-validation-failed.png
├── tc017-before-transfer-link-search.png
├── tc017-transfer-link-not-found.png
├── tc018-before-transfer-navigation.png
├── tc018-transfer-navigation-failed.png
├── tc019-transfer-navigation-failed.png
├── tc020-transfer-navigation-failed.png
└── [test-name]-final-failure-state.png (automatic)
```

## 🔍 Additional Debug Information

Each failing test now provides:

1. **📸 Screenshots at critical points**
2. **🔗 Current URL** when it fails
3. **📋 Page content** (first 200–300 characters)
4. **🔍 Available elements** (links, tables, etc.)
5. **⏰ Page load state**

## 🚀 How to Run with Screenshots

```bash
# Run with Chromium and full screenshots
npm test

# Run a specific test
npm test -- --grep "TC_AUTO_013"

# View reports with screenshots
npm run test:report
```

## 🎯 Benefits

1. **🔍 Faster debugging**: Screenshots show exactly what happened
2. **📊 Better evidence**: Automatic screenshots for reports
3. **🛠️ Troubleshooting**: Detailed info on why tests fail
4. **📈 Analysis**: Easier identification of failure patterns

## 📋 Recommended Next Steps

1. **Run the tests** to generate screenshots
2. **Review screenshots** to identify specific issues
3. **Analyze failure patterns** (credentials, missing elements, etc.)
4. **Create issues** based on visual evidence

---

**Date**: $(date)  
**Tests with Screenshots**: TC_AUTO_013, TC_AUTO_014, TC_AUTO_017, **TC_AUTO_018 (ENHANCED)**, TC_AUTO_019, TC_AUTO_020  
**Global Capture**: All tests that fail unexpectedly

## 🎯 **TC_AUTO_018 - Detailed Analysis**

The TC_AUTO_018 test now has **17 different captures** covering the entire transfer flow:

### **📋 TC_AUTO_018 Capture Flow:**
1. **Initial navigation** → `tc018-before-transfer-navigation.png`
2. **Transfer page loaded** → `tc018-transfer-page-loaded.png`
3. **Accounts overview** → `tc018-accounts-overview.png`
4. **Form ready** → `tc018-transfer-form-ready.png`
5. **Amount entered** → `tc018-amount-entered.png`
6. **Accounts selected** → `tc018-accounts-selected.png`
7. **Before submit** → `tc018-before-transfer-submit.png`
8. **After submit** → `tc018-after-transfer-submit.png`
9. **Transfer result** → `tc018-transfer-result.png`
10. **Final state** → `tc018-final-state.png`

### **🔍 Problem Detection:**
- ⚠️ **No sufficient accounts** → `tc018-no-accounts-found.png`
- ⚠️ **Insufficient options** → `tc018-insufficient-account-options.png`
- ❌ **Transfer errors** → `tc018-transfer-error.png`
- ❓ **Unknown states** → `tc018-transfer-unknown-state.png`
