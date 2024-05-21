const { test, expect } = require('@playwright/test');

test('Testing API - Deck of Cards', { 
  tag: '@e2e',
},
 async ({ page }) => {
    await page.goto('https://deckofcardsapi.com/')
    await expect(page).toHaveTitle(/Deck of Cards API/)
    const header = await page.getByRole('heading', { name: 'Deck of Cards' })
    await expect(header).toHaveText('Deck of Cards')
    const element = await page.locator('#shuffle');
    await expect (element).toHaveText('Shuffle the Cards:')
  });