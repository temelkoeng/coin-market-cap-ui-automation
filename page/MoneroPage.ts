import {Page} from "playwright"

export default class MoneroPage{
    private page: Page;
    private url: string = "https://coinmarketcap.com/currencies/monero/";
    readonly title;
    readonly chart;
    readonly news;
    readonly about;
    readonly addToWatchlist;
    readonly trackInPortfolio;
    readonly marketCap;
    readonly volume;

    constructor(page: Page){
        this.page = page;
        this.title = page.locator("//span[@title='Monero']");
        this.chart = page.locator("[data-title='Chart']");
        this.news = page.locator("[data-title='News']");
        this.about = page.locator("[data-title='About']");
        this.addToWatchlist = page.locator("//span[contains(text(), 'Add to watchlist')]");
        this.trackInPortfolio = page.locator("//div[contains(text(), 'Track in portfolio')]");
        this.marketCap = page.locator("//dt[text() = 'Market cap']");
        this.volume = page.locator("//dt[text() = 'Volume (24h)']");
    }

    async navigate() {
        await this.page.goto(this.url);
    }
}