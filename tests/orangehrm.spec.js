import { test, expect } from '@playwright/test';

test('OrangeHRM Login Logout', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  //await expect(page).toHaveURL(/dashboard/);

  await page.locator('.oxd-userdropdown-tab').click();

  await page.getByText('Logout').click();
});