import { test, expect } from '@playwright/test';
import HomePage from '../page/HomePage';

let homePage;

test.beforeEach(async ({ page }) => {
  
   homePage = new HomePage(page);

  await homePage.navigate();
});

test('Verify that the logo image is displayed on the Home page', async () => {

    await expect(homePage.logoImage, "Check the visibility of the logo image").toBeVisible()
  });

  test('Verify that the searchbar is displayed on the Home page', async () => {
    
    await expect(homePage.searchbar, "Check the visibility of the searchbar").toBeVisible()
  });

  test('Verify that the watchlist button is displayed on the Home page', async () => {
    
    await expect(homePage.watchlist, "Check the visibility of the watchlist button").toBeVisible()
  });

  test('Verify that the portfolio button is displayed on the Home page', async () => {
    
    await expect(homePage.portfolio, "Check the visibility of the portfolio button").toBeVisible()
  });

  test('Verify that the cryptocurrencies button is displayed on the Home page', async () => {
    
    await expect(homePage.cryptocurrencies, "Check the visibility of the cryptocurrencies button").toBeVisible()
  });

  test('Verify that the exchanges button is displayed on the Home page', async () => {
    
    await expect(homePage.exchanges, "Check the visibility of the exchanges button").toBeVisible()
  });

  test('Verify that the community button is displayed on the Home page', async () => {
    
    await expect(homePage.community, "Check the visibility of the community button").toBeVisible()
  });

  test('Verify that the products button is displayed on the Home page', async () => {
    
    await expect(homePage.community, "Check the visibility of the products button").toBeVisible()
  });

  test('Verify that the learn button is displayed on the Home page', async () => {
    
    await expect(homePage.learn, "Check the visibility of the learn button").toBeVisible()
  });

  test('Verify that the currency can be changed', async () => {
    
    await homePage.changeTheCurrencyToEuro();
    
    await expect(homePage.verifyTheCurrencyIsEuro(), "Check if the currency is euro").toBeTruthy()
  });

  test('Verify that you can sort by price', async () => {
    
    await homePage.sortByPrice();
    
    await expect(homePage.verifySortByPrice(), "Check the results are sorted by price").toBeTruthy()
  });

  test('Verify that you can select only 20 results', async () => {
    
    await homePage.selectOnly20Results();

    await expect(homePage.verifyTheResultsAre20).toBeTruthy();
  });