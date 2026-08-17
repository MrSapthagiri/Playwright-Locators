import { test, expect } from '@playwright/test';

test('SauceDemo CSS Locator Practice', async ({ page }) => {

    // Launch website
    await page.goto('https://www.saucedemo.com/');

    // =========================
    // 1. ID Selector
    // =========================

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();


    // =========================
    // 2. Class Selector
    // =========================

    const products = page.locator('.inventory_item');
    console.log('Product count:', await products.count());


    // =========================
    // 3. Tag Selector
    // =========================

    const buttons = page.locator('button');
    console.log('Button count:', await buttons.count());


    // =========================
    // 4. Attribute Selector
    // =========================

    const productImages = page.locator('img[src]');
    console.log('Image count:', await productImages.count());


    // =========================
    // 5. Tag + Class
    // =========================

    const productNames =
        page.locator('div.inventory_item_name');
    console.log('Product names:', await productNames.count());


    // =========================
    // 6. Descendant Selector
    // =========================

    const firstProductName =
        page.locator('.inventory_item .inventory_item_name').first();
    console.log(
        'First Product:',
        await firstProductName.textContent()
    );


    // =========================
    // 7. nth()
    // nth() is used to select a specific element from multiple matching elements.
    // =========================

    const secondProduct =
        page.locator('.inventory_item').nth(1);
    console.log(
        'Second Product:',
        await secondProduct
            .locator('.inventory_item_name')
            .textContent()
    );


    // =========================
    // 8. Add to Cart using CSS
    // =========================

    await page.locator('.inventory_item').first()
        .locator('button.btn_inventory')
        .click();


    // =========================
    // 9. Cart Icon
    // =========================

    await page.locator('.shopping_cart_link').click();


    // =========================
    // 10. Validate
    // =========================

    await expect(
        page.locator('.cart_item')
    ).toHaveCount(1);

});