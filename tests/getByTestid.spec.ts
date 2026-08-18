import { test, expect } from '@playwright/test';

test('Validate getByTestId locator', async ({ page }) => {

  // Navigate to Playwright Practice page
  await page.goto(
    'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
  );

  // ==========================================
  // 1. User Profile
  // ==========================================

  const userProfile = page.getByTestId('user-profile-card');

  await expect(userProfile).toBeVisible();

  console.log('User profile verified');


  // ==========================================
  // 2. Profile Name
  // ==========================================

  const profileName = page.getByTestId('profile-name');

  await expect(profileName).toBeVisible();
  await expect(profileName).toHaveText('John Doe');

  console.log('Profile name:', await profileName.textContent());


  // ==========================================
  // 3. Profile Email
  // ==========================================

  const profileEmail = page.getByTestId('profile-email');

  await expect(profileEmail).toBeVisible();
  await expect(profileEmail).toHaveText('john.doe@example.com');

  console.log('Profile email:', await profileEmail.textContent());


  // ==========================================
  // 4. Edit Profile Button
  // ==========================================

  const editProfileButton = page.getByTestId('edit-profile-btn');

  await expect(editProfileButton).toBeVisible();
  await expect(editProfileButton).toHaveText('Edit Profile');

  console.log('Edit Profile button verified');


  // ==========================================
  // 5. Product A
  // ==========================================

  const productA = page.getByTestId('product-card-1');

  await expect(productA).toBeVisible();

  const productAName = productA.getByTestId('product-name');

  await expect(productAName).toHaveText('Product A');

  console.log('Product A verified');


  // ==========================================
  // 6. Product B
  // ==========================================

  const productB = page.getByTestId('product-card-2');

  await expect(productB).toBeVisible();

  const productBName = productB.getByTestId('product-name');

  await expect(productBName).toHaveText('Product B');

  console.log('Product B verified');


  // ==========================================
  // 7. Product C
  // ==========================================

  const productC = page.getByTestId('product-card-3');

  await expect(productC).toBeVisible();

  const productCName = productC.getByTestId('product-name');

  await expect(productCName).toHaveText('Product C');

  console.log('Product C verified');

});