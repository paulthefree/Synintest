import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://widget.synonym.to/?embed=true');
  await page.waitForSelector('#remote-balance', { timeout: 5000 })

  await page.locator('#remote-balance').click();
  await page.locator('#remote-balance').fill('10 0000');
  await page.getByRole('button', { name: 'Create my channel' }).click();
});