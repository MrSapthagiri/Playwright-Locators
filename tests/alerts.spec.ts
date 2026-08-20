import { test, expect } from '@playwright/test';

test('Alerts and Popups', async ({ context, page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // --------------------------------
    // Simple Alert
    // --------------------------------

    page.once('dialog', async dialog => {

        console.log('Simple Alert:', dialog.message());

        await dialog.accept();
    });

    await page.locator('button:has-text("Simple Alert")').click();

    // --------------------------------
    // Confirmation Alert
    // --------------------------------

    page.once('dialog', async dialog => {

        console.log('Confirmation Alert:', dialog.message());

        await dialog.accept();
    });

    await page.locator('button:has-text("Confirmation Alert")').click();

    // --------------------------------
    // Prompt Alert
    // --------------------------------

    page.once('dialog', async dialog => {

        console.log('Prompt Alert:', dialog.message());

        await dialog.accept('Playwright Student');
    });

    await page.locator('button:has-text("Prompt Alert")').click();

    // --------------------------------
    // New Tab
    // --------------------------------

    const newTabPromise = context.waitForEvent('page');

    await page.locator('button:has-text("New Tab")').click();

    const newTab = await newTabPromise;

    await newTab.waitForLoadState('domcontentloaded');

    console.log('New Tab URL:', newTab.url());

    // Verify the actual New Tab URL
    await expect(newTab).toHaveURL(
        'https://www.pavantestingtools.com/'
    );

    await newTab.close();

    // --------------------------------
    // Popup Window
    // --------------------------------

    const popupPromise = context.waitForEvent('page');

    await page.locator('button:has-text("Popup Windows")').click();

    const popup = await popupPromise;

    await popup.waitForLoadState('domcontentloaded');

    console.log('Popup URL:', popup.url());

    await popup.close();

});