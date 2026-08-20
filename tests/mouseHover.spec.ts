import { test, expect } from '@playwright/test';

test('Mouse Hover', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // CSS locator for the Point Me button
    const pointMeButton = page.locator('button:has-text("Point Me")');

    // Verify Point Me button is visible
    await expect(pointMeButton).toBeVisible();

    // Move mouse over the button
    await pointMeButton.hover();

    // Verify the Mobiles dropdown link is visible
    const mobilesLink = page.getByRole('link', { name: 'Mobiles' });

    await expect(mobilesLink).toBeVisible();

});