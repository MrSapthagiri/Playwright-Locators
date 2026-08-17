import { test, expect } from '@playwright/test';

test('getByText Locator Practice', async ({ page }) => {

    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // 1. Locate exact "important" text
    const importantText = page.getByText(
        'important',
        { exact: true }
    );

    await expect(importantText).toBeVisible();

    // 2. Locate colored text
    const coloredText = page.getByText(
        'colored text',
        { exact: true }
    );

    await expect(coloredText).toBeVisible();

    // 3. Locate List item 1
    const listItem1 = page.getByText(
        'List item 1',
        { exact: true }
    );

    await expect(listItem1).toBeVisible();

    // 4. Locate List item 2 with link
    const listItem2 = page.getByText(
        'List item 2 with link',
        { exact: true }
    );

    await expect(listItem2).toBeVisible();

    // 5. Locate unique text
    const uniqueText = page.getByText(
        'Special: Unique text identifier',
        { exact: true }
    );

    await expect(uniqueText).toBeVisible();

    // 6. Locate Submit Form
    const submitButton = page.getByText(
        'Submit Form',
        { exact: true }
    );

    await expect(submitButton).toBeVisible();

    await submitButton.click();
});