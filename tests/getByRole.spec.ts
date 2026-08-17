import { test, expect } from '@playwright/test';

test('Verify GetByRole elements', async ({ page }) => {

    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // Verify Primary Action button
    const primaryButton = page.getByRole(
        'button',
        { name: 'Primary Action' }
    );

    await expect(primaryButton).toBeVisible();
    await expect(primaryButton).toBeEnabled();

    // Click Primary Action
    await primaryButton.click();

    // Verify Toggle Button
    const toggleButton = page.getByRole(
        'button',
        { name: 'Toggle Button' }
    );

    await expect(toggleButton).toBeVisible();
    await toggleButton.click();

    // Enter Username
    const username = page.getByRole(
        'textbox',
        { name: 'Username:' }
    );

    await expect(username).toBeVisible();
    await username.fill('Mr_Giri');

    // Accept Terms
    const acceptTerms = page.getByRole(
        'checkbox',
        { name: 'Accept terms' }
    );

    await expect(acceptTerms).toBeVisible();
    await acceptTerms.check();

    // Verify checkbox selected
    await expect(acceptTerms).toBeChecked();

    // Verify navigation links
    await expect(
        page.getByRole('link', { name: 'Home' })
    ).toBeVisible();

    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();

    await expect(
        page.getByRole('link', { name: 'Contact' })
    ).toBeVisible();
});