import { test, expect } from '@playwright/test';

test('Test form using getByPlaceholder locators', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Name input
  const nameInput = page.getByPlaceholder('Enter your full name');
  await nameInput.fill('Mr Giri');

  // Phone number input
  const phoneInput = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
  await phoneInput.fill('9876543210');

  // Message textarea
  const messageInput = page.getByPlaceholder('Type your message here...');
  await messageInput.fill('This is a test message');

  // Search products input
  const searchInput = page.getByPlaceholder('Search products...');
  await searchInput.fill('Laptop');

  // Search button
  await page.getByRole('button', { name: 'Search' }).click();

  // Optional validation
  await expect(searchInput).toHaveValue('Laptop');
});