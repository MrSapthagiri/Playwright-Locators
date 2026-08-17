import { test, expect } from '@playwright/test';

test('SauceDemo Login - CSS Locator', async ({ page }) => {

    // 1. Launch the website
    await page.goto('https://www.saucedemo.com/');

    // 2. Locate Username using CSS
    const username = page.locator('#user-name');

    // 3. Enter Username
    await username.fill('standard_user');

    // 4. Locate Password using CSS
    const password = page.locator('#password');

    // 5. Enter Password
    await password.fill('secret_sauce');

    // 6. Locate Login button using CSS
    const loginButton = page.locator('#login-button');

    // 7. Click Login
    await loginButton.click();

    // 8. Verify successful login
    await expect(page.locator('.title')).toHaveText('Products');

});


