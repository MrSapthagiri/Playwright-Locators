import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // CSS locator for the draggable element
    const dragMe = page.locator('#draggable');

    // CSS locator for the drop target
    const dropHere = page.locator('#droppable');

    // Verify both elements are visible
    await expect(dragMe).toBeVisible();
    await expect(dropHere).toBeVisible();

    // Drag the element to the target
    await dragMe.dragTo(dropHere);

    // Verify the drop target
    await expect(dropHere).toHaveText(/Dropped!/i);

});