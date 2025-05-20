import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://widget.synonym.to/?embed=true');
  await page.locator('.custom-checkbox').click();
  await page.getByRole('button', { name: 'Create my channel' }).click();
  await page.getByRole('button', { name: 'Pay now' }).click();
});