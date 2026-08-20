import { test, expect } from '@playwright/test';

test('Dynamic Button', async ({ page }) => {

    // Open the Playwright practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // CSS locator for the START button
    const startButton = page.locator('button:has-text("START")');

    // Verify START button is visible
    await expect(startButton).toBeVisible();

    // Click START button
    await startButton.click();

    // Verify START button is no longer visible
    await expect(startButton).not.toBeVisible();

});