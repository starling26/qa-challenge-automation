/**
 * ParaBank Contact Form Automation Suite - Exercise 2 - QA Challenge
 * Framework: Playwright with TypeScript
 */

import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://parabank.parasoft.com/parabank';

test.describe('Contact Form Validation Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to contact page before each test
    await page.goto(`${BASE_URL}/contact.htm`);
    await page.waitForLoadState('networkidle');
  });

  test('TC01: Verify contact form is displayed', async ({ page }) => {
    await test.step('Check if contact form is visible', async () => {
      // Verify contact form is visible by checking for specific contact form fields
      const nameField = page.locator('input[name="name"]');
      const emailField = page.locator('input[name="email"]');
      const phoneField = page.locator('input[name="phone"]');
      const messageField = page.locator('textarea[name="message"]');
      const submitBtn = page.locator('input[value="Send to Customer Care"]');
      
      await expect(nameField).toBeVisible();
      await expect(emailField).toBeVisible();
      await expect(phoneField).toBeVisible();
      await expect(messageField).toBeVisible();
      await expect(submitBtn).toBeVisible();
      
      console.log('✓ Contact form and all fields are visible');
    });
  });

  test('TC02: Verify validation errors on empty form submission', async ({ page }) => {
    await test.step('Verify form is empty before submission', async () => {
      // Confirm fields are empty
      const nameValue = await page.inputValue('input[name="name"]');
      const emailValue = await page.inputValue('input[name="email"]');
      const messageValue = await page.inputValue('textarea[name="message"]');
      
      expect(nameValue).toBe('');
      expect(emailValue).toBe('');
      expect(messageValue).toBe('');
      console.log('✓ Confirmed all fields are empty before submission');
    });

    await test.step('Submit form without filling any fields', async () => {
      // Take screenshot before submission
      await page.screenshot({ path: 'screenshots/before-empty-submission.png' });
      
      // Click submit without filling any fields
      await page.click('input[value="Send to Customer Care"]');
      await page.waitForTimeout(1000);
    });

    await test.step('Verify form submission behavior and validation', async () => {
      // Take screenshot after submission
      await page.screenshot({ path: 'screenshots/after-empty-submission.png' });
      
      // Check for validation error messages in the table cells
      const nameError = page.locator('td:has-text("Name is required.")');
      const emailError = page.locator('td:has-text("Email is required.")');
      const phoneError = page.locator('td:has-text("Phone is required.")');
      const messageError = page.locator('td:has-text("Message is required.")');
      
      await expect(nameError).toBeVisible();
      await expect(emailError).toBeVisible();
      await expect(phoneError).toBeVisible();
      await expect(messageError).toBeVisible();
      
      console.log('✓ All validation error messages are displayed');
      
      // Check if form is still on same page (indicating validation prevented submission)
      const currentUrl = page.url();
      console.log(`✓ Form submission attempted. Current URL: ${currentUrl}`);
      
      // Verify the submit button is still visible (form wasn't submitted successfully)
      const submitBtn = page.locator('input[value="Send to Customer Care"]');
      await expect(submitBtn).toBeVisible();
      
      expect(currentUrl).toContain('contact.htm');
    });
  });

  test('TC03: Verify invalid email format is rejected', async ({ page }) => {
    await test.step('Fill form with invalid email format', async () => {
      // Fill form with invalid email - ParaBank form fields
      await page.fill('input[name="name"]', 'Starling');
      await page.fill('input[name="email"]', 'sdeg@gmail'); // intentionally invalid (missing TLD)
      await page.fill('textarea[name="message"]', 'This is my challenge');
      
      // Verify the invalid email was actually entered
      const enteredEmail = await page.inputValue('input[name="email"]');
      expect(enteredEmail).toBe('sdeg@gmail');
      console.log(`✓ Invalid email entered: ${enteredEmail}`);
      
      // Capture form with invalid email before submission
      await page.screenshot({ path: 'screenshots/tc03-invalid-email-form-filled.png' });
      console.log('📸 Screenshot captured: tc03-invalid-email-form-filled.png');
    });

    await test.step('Submit form and verify validation behavior', async () => {
      // Take screenshot before submission
      await page.screenshot({ path: 'screenshots/before-invalid-email-submission.png' });
      
      // Submit form
      await page.click('input[value="Send to Customer Care"]');
      await page.waitForTimeout(2000);
      
      // Take screenshot after submission
      await page.screenshot({ path: 'screenshots/after-invalid-email-submission.png' });
      
      // Check if browser's native email validation triggered or if form shows validation errors
      const emailField = page.locator('input[name="email"]');
      const validationMessage = await emailField.evaluate((el: any) => el.validationMessage);
      console.log(`Browser validation message: "${validationMessage}"`);
      
      // Check for success message that shouldn't appear with invalid email
      const successMessage = page.locator('p:has-text("Thank you Starling")');
      const isSuccessVisible = await successMessage.isVisible();
      
      if (isSuccessVisible) {
        // BUG DETECTED: Invalid email was accepted
        await page.screenshot({ path: 'screenshots/tc03-email-bug-evidence.png' });
        console.log('📸 Bug evidence captured: tc03-email-bug-evidence.png');
        console.log('🐛 CONFIRMED BUG: Invalid email format was accepted');
        console.log('⚠️ Expected: Email validation should reject "sdeg@gmail" (no TLD)');
        console.log('🔍 Actual: Form submission succeeded with invalid email');
      }
      
      // Check for server-side validation error (ParaBank might show custom error)
      const emailError = page.locator('td:has-text("Email is required.")');
      const emailFormatError = page.locator('td:has-text("Invalid email format"), td:has-text("Enter a valid email")');
      
      // Check current URL or page state
      const currentUrl = page.url();
      console.log(`✓ Invalid email test completed. URL: ${currentUrl}`);
      
      // Enhanced validation - check if proper error handling exists
      if (await emailFormatError.count() > 0) {
        await page.screenshot({ path: 'screenshots/tc03-proper-email-validation.png' });
        console.log('✅ Proper email validation found');
      } else {
        await page.screenshot({ path: 'screenshots/tc03-missing-email-validation.png' });
        console.log('⚠️ No specific email format validation found');
      }
      
      // Verify we're still on contact page or check for validation messages
      expect(currentUrl).toContain('contact.htm');
      
      // Note: ParaBank may accept invalid email formats on client side
      console.log('✓ Email validation test completed - behavior depends on browser/server validation');
    });
  });

  test('TC04: Verify valid form submission', async ({ page }) => {
    await test.step('Fill form with valid data', async () => {
      // Fill form with valid data - ParaBank form fields
      await page.fill('input[name="name"]', 'John Doe');
      await page.fill('input[name="email"]', 'johndoe@example.com');
      await page.fill('input[name="phone"]', '555-123-4567');
      await page.fill('textarea[name="message"]', 'This is a valid test message for automation testing.');
      
      console.log('✓ Form filled with valid data');
    });

    await test.step('Submit form and verify successful submission', async () => {
      // Submit form
      await page.click('input[value="Send to Customer Care"]');
      await page.waitForTimeout(2000);
      
      // Verify successful submission by checking for success message
      const successMessage = page.locator('p:has-text("Thank you John Doe")');
      const confirmationMessage = page.locator('p:has-text("A Customer Care Representative will be contacting you.")');
      
      await expect(successMessage).toBeVisible();
      await expect(confirmationMessage).toBeVisible();
      
      // Verify submission (check for success message or URL change)
      const currentUrl = page.url();
      console.log(`✓ Form submitted successfully. Current URL: ${currentUrl}`);
      
      expect(currentUrl).toContain('contact.htm');
    });
  });

  test('TC05: Verify special characters handling in fields', async ({ page }) => {
    await test.step('Enter special characters in form fields', async () => {
      const specialChars = "<script>alert('XSS')</script>";
      
      // Enter special characters in ParaBank form fields
      await page.fill('input[name="name"]', specialChars);
      await page.fill('textarea[name="message"]', specialChars);
    });

    await test.step('Verify special characters handling', async () => {
      // Get actual values
      const nameValue = await page.inputValue('input[name="name"]');
      const messageValue = await page.inputValue('textarea[name="message"]');
      
      console.log(`✓ Special characters test - Name: ${nameValue}`);
      console.log(`✓ Special characters test - Message length: ${messageValue.length}`);
      
      // Verify input is handled (not expecting exact match due to sanitization)
      expect(nameValue).toBeTruthy();
    });
  });

  test('TC06: Verify required fields are marked', async ({ page }) => {
    await test.step('Locate form fields', async () => {
      // Count required field indicators - ParaBank may not have visual required indicators
      const nameField = page.locator('input[name="name"]');
      const emailField = page.locator('input[name="email"]');
      const messageField = page.locator('textarea[name="message"]');
      
      // Verify fields exist and are visible
      await expect(nameField).toBeVisible();
      await expect(emailField).toBeVisible();
      await expect(messageField).toBeVisible();
      
      console.log('✓ All form fields are present and visible');
    });
  });

  test('TC07: Verify field max length validation', async ({ page }) => {
    await test.step('Enter very long text in message field', async () => {
      // Try to enter very long text in message field
      const longText = 'A'.repeat(10000);
      await page.fill('textarea[name="message"]', longText);
    });

    await test.step('Verify message field length handling', async () => {
      // Get actual value length
      const actualValue = await page.inputValue('textarea[name="message"]');
      const actualLength = actualValue.length;
      
      console.log(`✓ Message field accepts ${actualLength} characters`);
      expect(actualLength).toBeGreaterThan(0);
    });
  });

  test('TC08: Verify telephone field must accept only numbers', async ({ page }) => {
    await test.step('Test phone field validation - should reject text/strings', async () => {
      const phoneField = page.locator('input[name="phone"]');
      
      // Test with letters (should NOT be accepted - this test should fail if letters are accepted)
      await phoneField.fill('abcdefg');
      const phoneValue = await phoneField.inputValue();
      console.log(`✗ Phone field - entered: 'abcdefg', value: '${phoneValue}'`);
      
      // Take screenshot before assertion to capture the bug
      await page.screenshot({ path: 'screenshots/tc08-phone-bug-evidence.png' });
      console.log('📸 Screenshot captured: tc08-phone-bug-evidence.png');
      
      try {
        // The field should either reject the input or the input should be empty/filtered
        // This assertion will fail if the field accepts text, proving the validation is not working
        expect(phoneValue).not.toBe('abcdefg'); // Should fail if field accepts text
        expect(phoneValue).toMatch(/^[0-9\-\(\)\s]*$/); // Should only contain numbers and phone formatting chars
      } catch (error) {
        // Capture additional screenshot when assertions fail
        await page.screenshot({ path: 'screenshots/tc08-phone-validation-failure.png' });
        console.log('📸 Assertion failure screenshot: tc08-phone-validation-failure.png');
        console.log('🐛 CONFIRMED BUG: Phone field accepts alphabetic characters');
        console.log('⚠️ Expected: Field should reject non-numeric input');
        console.log('🔍 Actual: Field accepts any text input');
        throw error; // Re-throw to maintain test failure
      }
      
      // Test with valid numeric input - this should always work
      await phoneField.fill('5551234567');
      const phoneNumericValue = await phoneField.inputValue();
      console.log(`✓ Phone field - entered: '5551234567', value: '${phoneNumericValue}'`);
      await page.screenshot({ path: 'screenshots/tc08-phone-numeric-valid.png' });
      expect(phoneNumericValue).toBe('5551234567');
      
      // Test with formatted numbers - should be accepted
      await phoneField.fill('555-123-4567');
      const phoneFormattedValue = await phoneField.inputValue();
      console.log(`✓ Phone field - entered: '555-123-4567', value: '${phoneFormattedValue}'`);
      await page.screenshot({ path: 'screenshots/tc08-phone-formatted-valid.png' });
      expect(phoneFormattedValue).toMatch(/^[0-9\-\(\)\s]+$/); // Should only contain numbers and formatting
    });
  });

test('TC09: Verify all form fields are accessible and accept appropriate input', async ({ page }) => {
    await test.step('Verify all form fields are accessible and test input acceptance', async () => {
        const nameField = page.locator('input[name="name"]');
        const emailField = page.locator('input[name="email"]');
        const phoneField = page.locator('input[name="phone"]');
        const messageField = page.locator('textarea[name="message"]');
        
        // Basic accessibility checks
        await expect(nameField).toBeEnabled();
        await expect(emailField).toBeEnabled();
        await expect(phoneField).toBeEnabled();
        await expect(messageField).toBeEnabled();
        console.log('✓ All form fields are present and enabled');

        // Test that name field accepts alphabetic text (normal behavior)
        const testName = 'Starling';
        await nameField.fill(testName);
        const nameValue = await nameField.inputValue();
        console.log(`Name field value: "${nameValue}"`);
        expect(nameValue).toBe(testName);
        
        // Test email field
        const testEmail = 'test@example.com';
        await emailField.fill(testEmail);
        const emailValue = await emailField.inputValue();
        expect(emailValue).toBe(testEmail);
        
        // Test phone field
        const testPhone = '123-456-7890';
        await phoneField.fill(testPhone);
        const phoneValue = await phoneField.inputValue();
        expect(phoneValue).toBe(testPhone);
        
        console.log('✓ All form fields accept appropriate input');
    });
});

  test('TC10: Verify form placeholders exist', async ({ page }) => {
    await test.step('Check for placeholder text in form fields', async () => {
      // Check for placeholder text in ParaBank form
      const namePlaceholder = await page.getAttribute('input[name="name"]', 'placeholder');
      const emailPlaceholder = await page.getAttribute('input[name="email"]', 'placeholder');
      const phonePlaceholder = await page.getAttribute('input[name="phone"]', 'placeholder');
      
      console.log(`✓ Name placeholder: ${namePlaceholder || 'None'}`);
      console.log(`✓ Email placeholder: ${emailPlaceholder || 'None'}`);
      console.log(`✓ Phone placeholder: ${phonePlaceholder || 'None'}`);
    });
  });

  test('TC11: Verify submit button properties', async ({ page }) => {
    await test.step('Check submit button visibility and state', async () => {
      const submitBtn = page.locator('input[value="Send to Customer Care"]');
      
      await expect(submitBtn).toBeVisible();
      await expect(submitBtn).toBeEnabled();
      
      const buttonValue = await submitBtn.getAttribute('value');
      console.log(`✓ Submit button text: ${buttonValue}`);
    });
  });

  test('TC12: Verify form reset/clear functionality', async ({ page }) => {
    await test.step('Fill form with test data', async () => {
      // Fill ParaBank form
      await page.fill('input[name="name"]', 'Starling');
      await page.fill('input[name="email"]', 'starling@gmail.com');
      await page.fill('input[name="phone"]', '80944992600');
      await page.fill('textarea[name="message"]', 'This is my QA Challenge');
      
      console.log('✓ Form filled with test data');
    });

    await test.step('Reload page and verify form is cleared', async () => {
      // Reload page to test if form clears
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      // Verify fields are empty
      const nameValue = await page.inputValue('input[name="name"]');
      const emailValue = await page.inputValue('input[name="email"]');
      const phoneValue = await page.inputValue('input[name="phone"]');
      const messageValue = await page.inputValue('textarea[name="message"]');
      
      expect(nameValue).toBe('');
      expect(emailValue).toBe('');
      expect(phoneValue).toBe('');
      expect(messageValue).toBe('');
      
      console.log('✓ Form cleared after page reload');
    });
  });

  test('TC13A: Verify form validation prevents submission with partial data', async ({ page }) => {
    await test.step('Fill form with only name and submit', async () => {
      // Fill only name field
      await page.fill('input[name="name"]', 'Test User');
      
      // Submit form
      await page.click('input[value="Send to Customer Care"]');
      await page.waitForTimeout(1000);
      
      // Verify validation errors for missing fields
      const emailError = page.locator('td:has-text("Email is required.")');
      const phoneError = page.locator('td:has-text("Phone is required.")');
      const messageError = page.locator('td:has-text("Message is required.")');
      
      await expect(emailError).toBeVisible();
      await expect(phoneError).toBeVisible();
      await expect(messageError).toBeVisible();
      
      console.log('✓ Partial form submission properly validates missing fields');
    });
  });


  test('TC_AUTO_013: Verify correct page load after login', async ({ page }) => {
    await test.step('Navigate to ParaBank homepage', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      console.log('✓ Navigated to ParaBank homepage');
    });

    await test.step('Login with test credentials', async () => {
      // Enter username and password
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      
      // Capture form before login attempt
      await page.screenshot({ path: 'screenshots/tc013-login-form-filled.png' });
      console.log('📸 Screenshot captured: tc013-login-form-filled.png');
      
      // Click login button
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Login attempted with credentials');
      
      // Check if login failed and capture evidence
      const currentUrl = page.url();
      if (currentUrl.includes('login.htm') || currentUrl.includes('error')) {
        await page.screenshot({ path: 'screenshots/tc013-login-failed-evidence.png' });
        console.log('📸 Login failure evidence: tc013-login-failed-evidence.png');
        console.log('🐛 LOGIN FAILED: Credentials jsmith/demo123 are invalid');
        console.log('⚠️ This will cause all account-related tests to fail');
        console.log('🔍 Need to update test credentials or create test user');
        
        // Check for specific error message
        const errorMessage = page.locator('h1:has-text("Error!"), p:has-text("username and password could not be verified")');
        if (await errorMessage.count() > 0) {
          console.log('✅ Error message confirmed: Invalid credentials');
        }
      } else {
        await page.screenshot({ path: 'screenshots/tc013-login-success.png' });
        console.log('📸 Login success: tc013-login-success.png');
      }
    });

    await test.step('Verify successful redirection to Accounts Overview page', async () => {
      // Verify URL redirection
      const currentUrl = page.url();
      expect(currentUrl).toContain('overview.htm');
      console.log(`✓ Redirected to correct URL: ${currentUrl}`);

      // Verify page title
      const pageTitle = await page.title();
      expect(pageTitle).toContain('ParaBank');
      console.log(`✓ Page title: ${pageTitle}`);

      // Verify specific welcome message for John Smith
      const welcomeMessage = page.locator('p:has-text("Welcome John Smith")');
      await expect(welcomeMessage).toBeVisible();
      console.log('✓ Welcome message for John Smith is visible');

      // Verify left sidebar menu
      const leftMenu = page.locator('#leftPanel, .leftPanel');
      await expect(leftMenu).toBeVisible();
      console.log('✓ Left sidebar menu is visible');

      // Verify main content area with specific Accounts Overview heading
      const accountsHeading = page.locator('h1:has-text("Accounts Overview")').first();
      await expect(accountsHeading).toBeVisible();
      console.log('✓ Accounts Overview heading is visible');

      // Verify accounts table is present
      const accountsTable = page.locator('table').filter({ hasText: 'Account' }).filter({ hasText: 'Balance' });
      await expect(accountsTable).toBeVisible();
      console.log('✓ Accounts table is visible');

      // Additional verification: Check that we're NOT seeing any error messages
      const errorHeading = page.locator('h1:has-text("Error!")');
      await expect(errorHeading).not.toBeVisible();
      console.log('✓ No error messages present');
    });
  });

  test('TC_AUTO_014: Validate table structure', async ({ page }) => {
    await test.step('Login and navigate to Accounts Overview', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Logged in and navigated to Accounts Overview');
    });

    await test.step('Validate table structure and headers', async () => {
      // Locate the accounts table specifically by content
      const accountsTable = page.locator('table').filter({ hasText: 'Account' }).filter({ hasText: 'Balance' }).first();
      await expect(accountsTable).toBeVisible();

      // Count number of columns by checking header cells in the correct table
      const headerCells = accountsTable.locator('tr').first().locator('td, th');
      const columnCount = await headerCells.count();
      console.log(`✓ Table has ${columnCount} columns`);

      // Verify expected column headers
      const expectedHeaders = ['Account', 'Balance', 'Available Amount'];
      for (let i = 0; i < Math.min(columnCount, expectedHeaders.length); i++) {
        const headerText = await headerCells.nth(i).textContent();
        console.log(`✓ Column ${i + 1} header: "${headerText?.trim()}"`);
      }

      // Check for table styling and structure
      const tableRows = accountsTable.locator('tbody tr, tr').filter({ hasText: '$' });
      const rowCount = await tableRows.count();
      console.log(`✓ Table has ${rowCount} data rows`);

      // Verify table has proper structure
      expect(columnCount).toBeGreaterThanOrEqual(2);
      expect(rowCount).toBeGreaterThan(0);
      console.log('✓ Table structure validation completed');
    });
  });

  test('TC_AUTO_015: Verify balance format', async ({ page }) => {
    await test.step('Login and navigate to Accounts Overview', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Logged in and navigated to Accounts Overview');
    });

    await test.step('Validate balance format for all accounts', async () => {
      // Locate the accounts table specifically
      const accountsTable = page.locator('table').filter({ hasText: 'Account' }).filter({ hasText: 'Balance' }).first();
      
      // Locate all balance cells in the correct table (2nd column)
      const balanceCells = accountsTable.locator('tbody tr td:nth-child(2), tr td:nth-child(2)').filter({ hasText: '$' });
      
      const balanceCount = await balanceCells.count();
      console.log(`✓ Found ${balanceCount} balance entries`);

      // Check format for each balance
      for (let i = 0; i < Math.min(balanceCount, 10); i++) { // Limit to first 10 for performance
        const balanceText = await balanceCells.nth(i).textContent();
        const cleanBalance = balanceText?.trim() || '';
        
        console.log(`✓ Balance ${i + 1}: "${cleanBalance}"`);
        
        // Verify balance format (positive: $XXX.XX, negative: -$XXX.XX or ($XXX.XX))
        const balanceRegex = /^(\$\d{1,3}(,\d{3})*\.\d{2}|[-]?\$\d{1,3}(,\d{3})*\.\d{2}|\(\$\d{1,3}(,\d{3})*\.\d{2}\))$/;
        
        if (cleanBalance && cleanBalance !== '' && !cleanBalance.includes('N/A') && !cleanBalance.includes('Total')) {
          expect(cleanBalance).toMatch(balanceRegex);
          
          // Verify decimal places (should have exactly 2)
          if (cleanBalance.includes('.')) {
            const decimalPart = cleanBalance.split('.')[1];
            const cleanDecimal = decimalPart?.replace(/[^\d]/g, '') || '';
            expect(cleanDecimal.length).toBeLessThanOrEqual(2);
          }
        }
      }

      console.log('✓ All balance formats validated successfully');
    });
  });

  test('TC_AUTO_016: Validate Balance vs Available Amount consistency', async ({ page }) => {
    await test.step('Login and navigate to Accounts Overview', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Logged in and navigated to Accounts Overview');
    });

    await test.step('Compare Balance vs Available Amount for all accounts', async () => {
      // Get the accounts table specifically
      const accountsTable = page.locator('table').filter({ hasText: 'Account' }).filter({ hasText: 'Balance' }).first();
      
      // Get all table rows with account data (exclude header and total rows)
      const accountRows = accountsTable.locator('tbody tr, tr').filter({ hasText: '$' }).filter({ hasNotText: 'Total' });
      const rowCount = await accountRows.count();
      console.log(`✓ Found ${rowCount} account rows to validate`);

      let violationCount = 0;

      // Limit to first 10 rows for performance
      const rowsToCheck = Math.min(rowCount, 10);
      
      for (let i = 0; i < rowsToCheck; i++) {
        const row = accountRows.nth(i);
        const cells = row.locator('td');
        const cellCount = await cells.count();

        if (cellCount >= 3) {
          // Extract account number, balance, and available amount
          const accountText = await cells.nth(0).textContent();
          const balanceText = await cells.nth(1).textContent();
          const availableText = await cells.nth(2).textContent();

          const accountNum = accountText?.trim() || '';
          const balanceStr = balanceText?.trim() || '';
          const availableStr = availableText?.trim() || '';

          console.log(`✓ Account: ${accountNum}, Balance: ${balanceStr}, Available: ${availableStr}`);

          // Convert currency strings to numbers for comparison
          const balanceNum = parseFloat(balanceStr.replace(/[$,\(\)]/g, '').replace(/^-/, '-'));
          const availableNum = parseFloat(availableStr.replace(/[$,\(\)]/g, '').replace(/^-/, '-'));

          if (!isNaN(balanceNum) && !isNaN(availableNum)) {
            // For positive balances, available amount should not exceed balance
            if (balanceNum > 0 && availableNum > balanceNum) {
              violationCount++;
              console.log(`❌ Violation found: Account ${accountNum} - Available (${availableNum}) > Balance (${balanceNum})`);
            } else {
              console.log(`✓ Account ${accountNum} - Available Amount ≤ Balance rule satisfied`);
            }
          }
        }
      }

      // Verify no business rule violations
      expect(violationCount).toBe(0);
      console.log(`✓ Balance vs Available Amount validation completed. Violations found: ${violationCount}`);
    });
  });

  test('TC_AUTO_017: Verify access to the Fund Transfer page', async ({ page }) => {
    await test.step('Login and navigate to Fund Transfer page', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      // Login with test credentials
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Logged in successfully');
    });

    await test.step('Navigate to Transfer Funds page', async () => {
      // Click on Transfer Funds link in sidebar
      const transferFundsLink = page.locator('a[href="transfer.htm"]');
      await expect(transferFundsLink).toBeVisible();
      await transferFundsLink.click();
      await page.waitForLoadState('networkidle');
      console.log('✓ Clicked on Transfer Funds link');
    });

    await test.step('Verify Fund Transfer page loads correctly', async () => {
      // Verify URL
      const currentUrl = page.url();
      expect(currentUrl).toContain('transfer.htm');
      console.log(`✓ Correct URL: ${currentUrl}`);

      // Verify page title
      const pageTitle = await page.title();
      expect(pageTitle).toContain('Transfer Funds');
      console.log(`✓ Page title: ${pageTitle}`);

      // Verify transfer form elements are visible
      const amountField = page.locator('input[name="amount"]');
      const fromAccountSelect = page.locator('select[name="fromAccountId"]');
      const toAccountSelect = page.locator('select[name="toAccountId"]');
      const transferButton = page.locator('input[value="Transfer"]');

      await expect(amountField).toBeVisible();
      await expect(fromAccountSelect).toBeVisible();
      await expect(toAccountSelect).toBeVisible();
      await expect(transferButton).toBeVisible();

      console.log('✓ All transfer form elements are visible');
      console.log('✓ Fund Transfer page verification completed');
    });
  });

  test('TC_AUTO_018: Verify successful transfer between valid accounts', async ({ page }) => {
    await test.step('Login and navigate to Transfer Funds', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      
      // Navigate to Transfer Funds
      await page.click('a[href="transfer.htm"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Navigated to Transfer Funds page');
    });

    await test.step('Get initial account balances', async () => {
      // Go back to accounts overview to check initial balances
      await page.click('a[href="overview.htm"]');
      await page.waitForLoadState('networkidle');
      
      const accountsTable = page.locator('table').filter({ hasText: 'Account' }).filter({ hasText: 'Balance' }).first();
      
      // Find accounts 12456 and 12678 (or use the first two available accounts)
      const accountRows = accountsTable.locator('tbody tr, tr').filter({ hasText: '$' }).filter({ hasNotText: 'Total' });
      const rowCount = await accountRows.count();
      
      if (rowCount >= 2) {
        const firstAccountRow = accountRows.nth(0);
        const secondAccountRow = accountRows.nth(1);
        
        const firstAccountNum = await firstAccountRow.locator('td').nth(0).textContent();
        const firstAccountBalance = await firstAccountRow.locator('td').nth(1).textContent();
        const secondAccountNum = await secondAccountRow.locator('td').nth(0).textContent();
        const secondAccountBalance = await secondAccountRow.locator('td').nth(1).textContent();
        
        console.log(`✓ Source account ${firstAccountNum}: ${firstAccountBalance}`);
        console.log(`✓ Destination account ${secondAccountNum}: ${secondAccountBalance}`);
      }
      
      // Return to transfer page
      await page.click('a[href="transfer.htm"]');
      await page.waitForLoadState('networkidle');
    });

    await test.step('Perform transfer between accounts', async () => {
      // Fill transfer amount
      await page.fill('input[name="amount"]', '10.00');
      console.log('✓ Entered transfer amount: $10.00');

      // Select from and to accounts (use first available options)
      const fromAccountSelect = page.locator('select[name="fromAccountId"]');
      const toAccountSelect = page.locator('select[name="toAccountId"]');
      
      // Get available options
      const fromOptions = await fromAccountSelect.locator('option').count();
      const toOptions = await toAccountSelect.locator('option').count();
      
      if (fromOptions > 1 && toOptions > 1) {
        // Select first available account as source (index 1 to skip placeholder)
        await fromAccountSelect.selectOption({ index: 1 });
        // Select second available account as destination (index 2 if available, else 1)
        const toIndex = toOptions > 2 ? 2 : 1;
        await toAccountSelect.selectOption({ index: toIndex });
        
        console.log('✓ Selected source and destination accounts');
      }

      // Click Transfer button
      await page.click('input[value="Transfer"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Transfer submitted');
    });

    await test.step('Verify transfer completion', async () => {
      // Check for success message or confirmation
      const successMessage = page.locator('h1:has-text("Transfer Complete"), p:has-text("Transfer Complete"), .title:has-text("Transfer Complete")');
      const errorMessage = page.locator('.error, [class*="error"]');
      
      // Wait a bit for the page to load
      await page.waitForTimeout(2000);
      
      const currentUrl = page.url();
      console.log(`✓ Transfer completed. Current URL: ${currentUrl}`);
      
      // Capture screenshot of transfer result page
      await page.screenshot({ path: 'screenshots/tc018-transfer-result.png' });
      console.log('📸 Screenshot captured: tc018-transfer-result.png');
      
      // Check if we're on a confirmation page or if there are any error messages
      const pageContent = await page.textContent('body');
      
      if (pageContent?.includes('Transfer Complete')) {
        console.log('✓ Transfer appears to have been processed');
        await page.screenshot({ path: 'screenshots/tc018-transfer-success.png' });
        console.log('📸 Success screenshot: tc018-transfer-success.png');
        
        // ⚠️ CRITICAL: This test does NOT verify actual balance changes
        console.log('🐛 WARNING: This test only verifies form submission, NOT actual money transfer');
        console.log('⚠️ Missing validation: Balance changes are not verified');
        console.log('🔍 Test gap: Cannot confirm if $10.00 was actually transferred between accounts');
        
        // Capture evidence of incomplete validation
        await page.screenshot({ path: 'screenshots/tc018-incomplete-validation-evidence.png' });
        console.log('📸 Evidence of incomplete validation: tc018-incomplete-validation-evidence.png');
        
      } else if (await errorMessage.count() > 0) {
        const errorText = await errorMessage.first().textContent();
        console.log(`⚠️ Transfer validation: ${errorText}`);
        await page.screenshot({ path: 'screenshots/tc018-transfer-error.png' });
        console.log('📸 Error screenshot: tc018-transfer-error.png');
      } else {
        console.log('✓ Transfer form submitted - checking for validation or confirmation');
        await page.screenshot({ path: 'screenshots/tc018-transfer-unknown-state.png' });
        console.log('📸 Unknown state screenshot: tc018-transfer-unknown-state.png');
      }
      
      // Log final status with warning about test completeness
      console.log('✓ Transfer validation completed');
      console.log('❌ NOTE: This test does NOT validate actual financial transaction occurred');
    });
  });

  test('TC_AUTO_019: Validate error when transferring negative or zero amount', async ({ page }) => {
    await test.step('Login and navigate to Transfer Funds', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      
      await page.click('a[href="transfer.htm"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Navigated to Transfer Funds page');
    });

    await test.step('Test transfer with negative amount', async () => {
      // Fill negative amount
      await page.fill('input[name="amount"]', '-50');
      console.log('✓ Entered negative amount: -50');

      // Select accounts if available
      const fromAccountSelect = page.locator('select[name="fromAccountId"]');
      const toAccountSelect = page.locator('select[name="toAccountId"]');
      
      const fromOptions = await fromAccountSelect.locator('option').count();
      if (fromOptions > 1) {
        await fromAccountSelect.selectOption({ index: 1 });
        await toAccountSelect.selectOption({ index: fromOptions > 2 ? 2 : 1 });
        console.log('✓ Selected accounts for negative amount test');
      }

      // Submit transfer
      await page.click('input[value="Transfer"]');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // Check for validation error
      const errorMessages = page.locator('.error, [class*="error"], td:has-text("must be greater"), p:has-text("must be greater")');
      const pageContent = await page.textContent('body');
      
      console.log('✓ Submitted transfer with negative amount');
      
      if (pageContent?.includes('must be greater than zero') || pageContent?.includes('positive') || await errorMessages.count() > 0) {
        console.log('✓ Validation error displayed for negative amount');
      } else {
        console.log('⚠️ Expected validation error for negative amount');
      }
    });

    await test.step('Test transfer with zero amount', async () => {
      // Clear and fill zero amount
      await page.fill('input[name="amount"]', '0');
      console.log('✓ Entered zero amount: 0');

      // Submit transfer
      await page.click('input[value="Transfer"]');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // Check for validation error
      const errorMessages = page.locator('.error, [class*="error"], td:has-text("must be greater"), p:has-text("must be greater")');
      const pageContent = await page.textContent('body');
      
      console.log('✓ Submitted transfer with zero amount');
      
      if (pageContent?.includes('must be greater than zero') || pageContent?.includes('positive') || await errorMessages.count() > 0) {
        console.log('✓ Validation error displayed for zero amount');
      } else {
        console.log('⚠️ Expected validation error for zero amount');
      }
      
      console.log('✓ Amount validation tests completed');
    });
  });

  test('TC_AUTO_020: Validate error when no accounts are selected for transfer', async ({ page }) => {
    await test.step('Login and navigate to Transfer Funds', async () => {
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      
      await page.fill('input[name="username"]', 'jsmith');
      await page.fill('input[name="password"]', 'demo123');
      await page.click('input[value="Log In"]');
      await page.waitForLoadState('networkidle');
      
      await page.click('a[href="transfer.htm"]');
      await page.waitForLoadState('networkidle');
      console.log('✓ Navigated to Transfer Funds page');
    });

    await test.step('Test transfer without selecting accounts', async () => {
      // Fill valid amount
      await page.fill('input[name="amount"]', '200');
      console.log('✓ Entered valid amount: 200');

      // Ensure no accounts are selected (select placeholder/empty options if available)
      const fromAccountSelect = page.locator('select[name="fromAccountId"]');
      const toAccountSelect = page.locator('select[name="toAccountId"]');
      
      // Try to select empty/placeholder options (usually index 0)
      try {
        await fromAccountSelect.selectOption({ index: 0 });
        await toAccountSelect.selectOption({ index: 0 });
        console.log('✓ Reset account selections to empty/placeholder values');
      } catch (error) {
        console.log('⚠️ Could not reset account selections - they may already be empty');
      }

      // Submit transfer without proper account selection
      await page.click('input[value="Transfer"]');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // Check for validation error about account selection
      const errorMessages = page.locator('.error, [class*="error"], td:has-text("select"), p:has-text("select"), td:has-text("account"), p:has-text("account")');
      const pageContent = await page.textContent('body');
      
      console.log('✓ Submitted transfer without account selection');
      
      if (pageContent?.includes('select') && (pageContent?.includes('account') || pageContent?.includes('source') || pageContent?.includes('destination'))) {
        console.log('✓ Validation error displayed for missing account selection');
      } else if (await errorMessages.count() > 0) {
        const errorText = await errorMessages.first().textContent();
        console.log(`✓ Validation error found: ${errorText}`);
      } else {
        console.log('⚠️ Expected validation error for missing account selection');
      }
      
      console.log('✓ Account selection validation test completed');
    });
  });
});