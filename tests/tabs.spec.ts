import { test, expect } from '@playwright/test';

test('Handle New Tab', async ({ context, page }) => {

    // Open the Playwright practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // CSS locator for the Wikipedia link
    const wikipediaLink = page.locator('a[href="https://wikipedia.org/wiki/"]');

    // Verify the link is visible
    await expect(wikipediaLink).toBeVisible();

    // Wait for the new tab while clicking the link
    const newTabPromise = context.waitForEvent('page');

    await wikipediaLink.click();

    // Capture the newly opened tab
    const newTab = await newTabPromise;

    // Wait for the new tab to load
    await newTab.waitForLoadState();

    // Print the new tab URL
    console.log('New Tab URL:', newTab.url());

    // Verify Wikipedia opened
    await expect(newTab).toHaveURL(/wikipedia\.org/);

    // Close the new tab
    await newTab.close();
});