import { test, expect } from '@playwright/test';
import MoneroPage from '../page/MoneroPage';

let moneroPage;

test.beforeEach(async ({ page }) => {
  
    moneroPage = new MoneroPage(page);

    await moneroPage.navigate();
});

test('Verify that the Monero title is displayed on the Details page', async () => {

    await expect(moneroPage.title, "Check the visibility of the Monero title").toBeVisible()
  });

test('Verify that the chart button is displayed on the Details page', async () => {

    await expect(moneroPage.chart, "Check the visibility of the chart button").toBeVisible()
  });

test('Verify that the news button is displayed on the Details page', async () => {

    await expect(moneroPage.news, "Check the visibility of the news button").toBeVisible()
  });

test('Verify that the about button is displayed on the Details page', async () => {

    await expect(moneroPage.about, "Check the visibility of the about button").toBeVisible()
  });

  test('Verify that the add to watchlist button is displayed on the Details page', async () => {

    await expect(moneroPage.addToWatchlist, "Check the visibility of the add to watchlist button").toBeVisible()
  });

  test('Verify that the track in portfolion button is displayed on the Details page', async () => {

    await expect(moneroPage.trackInPortfolio, "Check the visibility of the track in portfolion button").toBeVisible()
  });

  test('Verify that the market cap label is displayed on the Details page', async () => {

    await expect(moneroPage.marketCap, "Check the visibility of the market cap label").toBeVisible()
  });

  test('Verify that the volume label is displayed on the Details page', async () => {

    await expect(moneroPage.volume, "Check the visibility of the volume label").toBeVisible()
  });
