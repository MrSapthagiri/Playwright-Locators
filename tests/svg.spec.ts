import { test, expect } from '@playwright/test';

test('SVG Elements', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // CSS locator for SVG elements
    const svg = page.locator('svg');

    // Verify SVG element is present
    await expect(svg.first()).toBeVisible();

    // Get the number of SVG elements
    const svgCount = await svg.count();

    console.log('Number of SVG elements:', svgCount);

    // Verify at least one SVG exists
    expect(svgCount).toBeGreaterThan(0);

});