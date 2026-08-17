import { test, expect } from '@playwright/test';

test('getByAltText and CSS locator', async ({ page }) => {

  // Open Playwright Practice page
  await page.goto(
    'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
  );

  // -------------------------------
  // 1. getByAltText() locator
  // -------------------------------
  const playwrightLogo = page.getByAltText('logo image');

  await expect(playwrightLogo).toBeVisible();

  // Verify exactly one element
  await expect(playwrightLogo).toHaveCount(1);

  // Get alt attribute
  const altText = await playwrightLogo.getAttribute('alt');

  console.log('Alt Text:', altText);


  // -------------------------------
  // 2. CSS Locator
  // -------------------------------
  const logoUsingCSS = page.locator('img[alt="logo image"]');

  // Verify image is visible
  await expect(logoUsingCSS).toBeVisible();

  // Verify exactly one element
  await expect(logoUsingCSS).toHaveCount(1);

  console.log('CSS locator found the logo');


});