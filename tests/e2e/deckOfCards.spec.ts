import { test, expect} from '@playwright/test';
import { selectors, pageTexts } from '../../utils/constants';

test('Testing API - Deck of Cards', { 
  tag: '@e2e',
},
 async ({ page }) => {
    await page.goto('https://deckofcardsapi.com/')
    await expect(page).toHaveTitle(pageTexts.title)
    const header = await page.getByRole('heading', { name: pageTexts.header })
    await expect(header).toHaveText(pageTexts.header)
    const element = await page.locator(selectors.shuffleCards);
    await expect (element).toHaveText(pageTexts.shuffle)
  });