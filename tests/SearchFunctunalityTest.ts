import { test, expect } from '@playwright/test';
import HomePage from '../page/HomePage';

const searchWord: string = "dogecoin";
let homePage;

test.beforeEach(async ({ page }) => {
  
   homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.searchForCryptocurrency(searchWord);
});

test('Verify that the searched word is displayed as a suggestion under the searchbar', async () => {
    
    await expect(homePage.verifyTheSearchedCryptocurrencyIsDisplaeyd, "Check if the searched word is displayed under the search suggestions").toBeTruthy()
  });

  test('Verify that you can perform a search', async () => {
    
    await homePage.performSearch();

    const url = await homePage.getCurrentUrl();
    await expect(url).toContain(searchWord);
  });