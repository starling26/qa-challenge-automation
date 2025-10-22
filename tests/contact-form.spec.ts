import { test, expect } from '@playwright/test';

const url = 'https://parabank.parasoft.com/parabank';

test.describe('ParaBank Automated Tests', () => {

  test('TC_AUTO_001: Contact form is displayed', async ({ page }) => {
    await page.goto(`${url}/contact.htm`);

    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('input[value="Send to Customer Care"]')).toBeVisible();
  });

  test('TC_AUTO_002: Validation on empty form submission', async ({ page }) => {
    await page.goto(`${url}/contact.htm`);
    
    await page.locator('input[value="Send to Customer Care"]').click();
    
    const currentUrl = page.url();
    expect(currentUrl).toContain('contact.htm');
  });

    test('TC_AUTO_003: Invalid email format is rejected', async ({ page }) => {
      await page.goto(`${url}/contact.htm`);

      await page.locator('#name').fill('Starling');
      await page.locator('#email').fill('sdeg@yahoo.com');
      await page.locator('#message').fill('Test message');
      await page.locator('input[value="Send to Customer Care"]').click();
      
      const emailValue = await page.locator('#email').inputValue();
      // El test debe fallar si el correo NO termina en @gmail.com
      expect(emailValue).toMatch(/@gmail\.com$/);
    });



  test('TC_AUTO_004: Valid form submission', async ({ page }) => {
    await test.step('Navigate to contact page', async () => {
      await page.goto(`${url}/contact.htm`);
      await page.waitForLoadState('networkidle');
    });

    await test.step('Fill contact form', async () => {
      await page.locator('#name').fill('Starling De la Cruz');
      await page.locator('#email').fill('starling@gmail.com');
      await page.locator('#phone').fill('8091234567');
      await page.locator('#message').fill('This is a valid test message for QA automation challenge');

      // Capture values to ensure no field is missing
      const name = await page.locator('#name').inputValue();
      const email = await page.locator('#email').inputValue();
      const phone = await page.locator('#phone').inputValue();
      const message = await page.locator('#message').inputValue();

      console.log('Form values:', { name, email, phone, message });

      // If any required field is missing the test should fail
      expect(name.length).toBeGreaterThan(0);
      expect(email.length).toBeGreaterThan(0);
      expect(phone.length).toBeGreaterThan(0);
      expect(message.length).toBeGreaterThan(0);

      await page.screenshot({ path: 'screenshots/TC_AUTO_004-before-submit.png' });
    });

    await test.step('Submit form and verify submission', async () => {
      await page.locator('input[value="Send to Customer Care"]').click();
      // Verification: ensure we remain or return to contact page (submission indicator)
      await expect(page).toHaveURL(/.contact\.htm./);
      await page.screenshot({ path: 'screenshots/TC_AUTO_004-after-submit.png' });
    });
  });

  test('TC_AUTO_005: Required fields are marked', async ({ page }) => {
    await page.goto(`${url}/contact.htm`);

    await expect(page.locator('text=Name:')).toBeVisible();
    await expect(page.locator('text=Email:')).toBeVisible();
    await expect(page.locator('text=Message:')).toBeVisible();
  });

  test('TC_AUTO_006: Message field max length validation', async ({ page }) => {
    await page.goto(`${url}/contact.htm`);

    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@gmail.com');
    
    const longMessage = 'A'.repeat(10001);
    await page.locator('#message').fill(longMessage);
    
    const messageValue = await page.locator('#message').inputValue();
    expect(messageValue.length).toBeLessThanOrEqual(10000);
  });

  test('TC_AUTO_007: Telephone field validation', async ({ page }) => {
    await page.goto(`${url}/contact.htm`);
    
    await page.locator('#phone').fill('abcdefg');
    const lettersValue = await page.locator('#phone').inputValue();
    
    expect(lettersValue).toMatch(/^[0-9]*$/);
  });

});