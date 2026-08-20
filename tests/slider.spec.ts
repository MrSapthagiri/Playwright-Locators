import { test, expect } from '@playwright/test';

test('Slider - Move Left to Right', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // Slider container
    const slider = page.locator('#slider-range');

    // First slider handle
    const firstHandle = slider.locator('.ui-slider-handle').nth(0);

    // Verify slider and handle are visible
    await expect(slider).toBeVisible();
    await expect(firstHandle).toBeVisible();

    // Get slider handle position
    const handleBox = await firstHandle.boundingBox();

    // Get slider position
    const sliderBox = await slider.boundingBox();

    if (!handleBox || !sliderBox) {
        throw new Error('Slider or slider handle was not found');
    }

    // Move mouse to the first handle
    await page.mouse.move(
        handleBox.x + handleBox.width / 2,
        handleBox.y + handleBox.height / 2
    );

    // Press and hold mouse
    await page.mouse.down();

    // Move handle from left to right
    await page.mouse.move(
        sliderBox.x + sliderBox.width - 5,
        handleBox.y + handleBox.height / 2,
        {
            steps: 20
        }
    );

    // Release mouse
    await page.mouse.up();

    // Wait so we can visually see the slider movement
    await page.waitForTimeout(3000);

});