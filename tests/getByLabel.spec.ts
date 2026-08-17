import { test, expect } from '@playwright/test';

test('getByLabel Locator Practice', async ({ page }) => {

    // Open application
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // 1. Email Address
    const email = page.getByLabel('Email Address:');

    await expect(email).toBeVisible();
    await email.fill('test@gmail.com');

    // 2. Password
    const password = page.getByLabel('Password:');

    await expect(password).toBeVisible();
    await password.fill('Test@123');

    // 3. Your Age
    const age = page.getByLabel('Your Age:');

    await expect(age).toBeVisible();
    await age.fill('25');

    // 4. Shipping Method - Standard
    let standard = page.getByLabel('Standard');

    await expect(standard).toBeVisible();
    await standard.check();

    // Verify Standard is selected
    await expect(standard).toBeChecked();

    // 5. Shipping Method - Express
    const express = page.getByLabel('Express');

    await expect(express).toBeVisible();
});