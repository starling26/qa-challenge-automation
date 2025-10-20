# GitHub Copilot Instructions for QA Challenge Automation Project

## Project Overview
This is a Playwright-based test automation framework written in TypeScript for testing web applications, specifically focusing on ParaBank contact form validation and user interface testing.

## Tech Stack
- **Framework**: Playwright with TypeScript
- **Test Runner**: Playwright Test
- **Language**: TypeScript
- **Target Application**: ParaBank (https://parabank.parasoft.com)

## Project Structure
```
qa-challenge-automation/
├── tests/                  # Test specification files
├── screenshots/            # Test screenshots and evidence
├── playwright-report/      # Test execution reports
├── documentation/          # Project documentation
├── scripts/               # Utility scripts
└── test-results/          # Test execution results
```

## Coding Standards & Best Practices

### Test Organization
- Use `test.describe()` blocks to group related test cases
- Implement `test.beforeEach()` for common setup steps
- Use `test.step()` for detailed test step documentation
- Follow naming convention: `TC##: Descriptive test name`

### Code Style
- Use async/await for all asynchronous operations
- Implement proper error handling and timeouts
- Include detailed console logging for test steps
- Take screenshots for evidence capture
- Use descriptive variable names and comments

### Test Patterns
```typescript
// Preferred test structure
test('TC##: Description', async ({ page }) => {
  await test.step('Step description', async () => {
    // Test implementation
    console.log('✓ Step completed successfully');
  });
});
```

### Locator Strategies
- Prefer semantic selectors: `input[name="fieldname"]`
- Use role-based selectors when appropriate: `page.getByRole()`
- Fallback to CSS selectors for legacy applications
- Avoid XPath unless absolutely necessary

### Assertions
- Use Playwright's built-in assertions: `expect().toBeVisible()`
- Validate both positive and negative scenarios
- Include boundary condition testing
- Verify form validation behavior

## Specific Guidelines

### Form Testing
- Always verify form visibility before interaction
- Test empty form submissions for validation
- Test invalid data formats (email, phone, etc.)
- Verify field accessibility and enabled state
- Test special character handling and XSS prevention
- Validate field length limitations

### Screenshot Strategy
- Take before/after screenshots for form submissions
- Use descriptive file names: `screenshots/before-action-description.png`
- Store screenshots in organized folders by test type

### Error Handling
- Implement fallback locators for unstable elements
- Use `waitForLoadState('networkidle')` for page readiness
- Add appropriate timeouts for dynamic content
- Handle missing elements gracefully

### Documentation
- Include detailed comments for complex test logic
- Document known issues or workarounds
- Explain business logic behind test scenarios
- Use JSDoc comments for test functions

## Common Patterns to Suggest

### Page Navigation
```typescript
await page.goto(`${BASE_URL}/path`);
await page.waitForLoadState('networkidle');
```

### Form Interaction
```typescript
await page.fill('input[name="field"]', 'value');
await page.click('input[value="Submit"]');
await page.waitForTimeout(1000); // Allow processing
```

### Validation Checking
```typescript
const errorMessages = await page.locator('.error, .validation-error').all();
const currentUrl = page.url();
expect(currentUrl).toContain('expected-path');
```

### Screenshot Evidence
```typescript
await page.screenshot({ path: 'screenshots/descriptive-name.png' });
```

## What NOT to Suggest
- Avoid hardcoded waits unless necessary
- Don't use outdated Playwright APIs
- Avoid overly complex selectors
- Don't suggest browser-specific code without cross-browser considerations
- Avoid suggesting test data that could be sensitive

## Test Categories to Focus On
1. **Functional Testing**: Core feature validation
2. **UI Testing**: Element visibility and interaction
3. **Form Validation**: Input validation and error handling
4. **Cross-browser Compatibility**: Multi-browser testing
5. **Accessibility Testing**: ARIA compliance and usability
6. **Security Testing**: XSS prevention and input sanitization

## When Suggesting Code
- Always include proper TypeScript typing
- Use modern async/await syntax
- Include error handling where appropriate
- Add meaningful console.log statements for debugging
- Structure code for maintainability and readability
- Follow the existing project's coding patterns

## Testing Philosophy
- Write tests that are reliable and maintainable
- Focus on user behavior rather than implementation details
- Include both happy path and edge case scenarios
- Ensure tests are independent and can run in any order
- Prioritize clear, descriptive test names and steps
