import { test, expect } from '@playwright/test';

test('Broken Links', async ({ page, request }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // Get all broken-link elements
    const brokenLinks = page.locator(
        'a[href*="deadlinkcity.com/error-page.asp"]'
    );

    // Verify broken links are available
    const linkCount = await brokenLinks.count();

    console.log('Number of broken links:', linkCount);

    expect(linkCount).toBeGreaterThan(0);

    // Check each link
    for (let i = 0; i < linkCount; i++) {

        const href = await brokenLinks.nth(i).getAttribute('href');

        if (href) {

            const response = await request.get(href);

            console.log(
                `Link ${i + 1}: ${href} | Status: ${response.status()}`
            );

            // Verify the link returns an error status
            expect(response.status()).toBeGreaterThanOrEqual(400);
        }
    }

});