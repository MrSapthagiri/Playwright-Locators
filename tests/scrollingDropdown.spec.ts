import { test, expect } from '@playwright/test';

test('Scrolling Dropdown', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // CSS locator for the scrolling dropdown input
    const dropdown = page.locator('input[placeholder="Select an item"]');

    // Verify dropdown is visible
    await expect(dropdown).toBeVisible();

    // Click the dropdown
    await dropdown.click();

    // Type an item to search
    await dropdown.fill('Apple');

    // Press ArrowDown to select the item
    await dropdown.press('ArrowDown');

    // Press Enter to select
    await dropdown.press('Enter');

    // Verify the selected value
    await expect(dropdown).toHaveValue('Apple');

    // Wait so students can see the selection
    await page.waitForTimeout(2000);

});
