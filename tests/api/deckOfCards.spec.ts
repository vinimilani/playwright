import { test, expect} from '@playwright/test';

test('Testing API - Deck of Cards', { 
  tag: '@API',
},
 async ({ request }) => {
    
    const suffle = await request.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') // 1 deck is used
    expect(suffle.ok()).toBeTruthy();
    expect(await suffle.json()).toHaveProperty('deck_id',);
    const deck_id = (await suffle.json()).deck_id;

    const draw = await request.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`) // draw 2 cards
    expect(draw.ok()).toBeTruthy();
    expect(await draw.json()).toHaveProperty('cards');
    expect(await draw.json()).toHaveProperty('remaining', 50); // 52 - 2 = 50
  });