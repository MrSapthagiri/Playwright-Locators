import { test, expect } from '@playwright/test';

test('Labels and Links', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // --------------------------------
    // Mobile Labels
    // --------------------------------

    const mobileLabels = page.getByText('Samsung Real Me Moto');

    await expect(mobileLabels).toBeVisible();

    // --------------------------------
    // Laptop Links
    // --------------------------------

    const appleLink = page.getByRole('link', { name: 'Apple' });
    const lenovoLink = page.getByRole('link', { name: 'Lenovo' });
    const dellLink = page.getByRole('link', { name: 'Dell' });

    // Verify laptop links are visible
    await expect(appleLink).toBeVisible();
    await expect(lenovoLink).toBeVisible();
    await expect(dellLink).toBeVisible();

    // Verify links have correct href
    await expect(appleLink).toHaveAttribute(
        'href',
        'https://www.apple.com/'
    );

    await expect(lenovoLink).toHaveAttribute(
        'href',
        'https://www.lenovo.com/'
    );

    await expect(dellLink).toHaveAttribute(
        'href',
        'https://www.dell.com/'
    );

});