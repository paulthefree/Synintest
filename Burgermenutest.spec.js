import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://widget.synonym.to/?embed=true');
  await page.waitForSelector('.header-button > svg', { timeout: 5000 })
  await page.locator('.header-button > svg').click();
  await page.locator('rect').nth(1).click();
});