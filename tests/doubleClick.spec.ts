import { test, expect } from '@playwright/test';

test('Double Click', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // CSS locator for Field1
    const field1 = page.locator('#field1');

    // CSS locator for Field2
    const field2 = page.locator('#field2');

    // Enter text into Field1
    await field1.fill('Hello Playwright');

    // Double click the Copy Text button
    await page.locator('button:has-text("Copy Text")').dblclick();

    // Verify text is copied from Field1 to Field2
    await expect(field2).toHaveValue('Hello Playwright');

});