import { test, expect } from '@playwright/test';

test('Validate getByTitle locator', async ({ page }) => {

  // 1. Navigate to Playwright Practice page
  await page.goto(
    'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
  );

  // 2. Locate Home link using actual title attribute
  const homeLink = page.getByTitle('Home page link');

  // 3. Verify Home link is visible
  await expect(homeLink).toBeVisible();
  

  // 4. Verify exactly one Home link is available
  await expect(homeLink).toHaveCount(1);

  // 5. Verify actual title attribute
  await expect(homeLink).toHaveAttribute(
    'title',
    'Home page link'
  );

  // 6. Verify visible text
  await expect(homeLink).toHaveText('Home');

  // 7. Get title attribute
  const titleValue = await homeLink.getAttribute('title');

  console.log('Title Attribute:', titleValue);
  console.log('Home link is visible and correctly identified');

});