import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://widget.synonym.to/?embed=true');
  await page.getByRole('textbox', { name: '0' }).click();
  await page.locator('#local-balance').fill('10 0000');
  await page.getByRole('button', { name: 'Create my channel' }).click();
});