import {Page} from "playwright"

export default class HomePage{
    private page: Page;
    private url = "https://coinmarketcap.com/";
    private searchWord: string;
    readonly logoImage;
    readonly searchbar;
    readonly watchlist;
    readonly portfolio;
    readonly cryptocurrencies;
    readonly exchanges;
    readonly community;
    readonly products;
    readonly learn;
    readonly searchResultElement;
    readonly searchField;
    readonly changeCurrency;
    readonly selectCurrencyLabel;
    readonly searchForCurrencybar;
    readonly sortByPriceButton;

    constructor(page: Page){
        this.page = page;
        this.logoImage = page.locator("//a[@data-role = 'logo']");
        this.searchbar = page.getByText('Search/');
        this.watchlist = page.locator("//a[@href='/watchlist/']");
        this.portfolio = page.locator("//a[@href='/portfolio-tracker/']");
        this.cryptocurrencies = page.locator("//span[contains(text(), 'Cryptocurrencies')]");
        this.exchanges = page.locator("//a[contains(text(), 'Exchanges')][contains(text(), 'Exchanges')]");
        this.community = page.locator("//a[@href='/community/'][contains(text(), 'Community')]");
        this.products = page.locator("//div[@data-role='menu-item']//span[contains(text(), 'Products')]");
        this.learn = page.locator("//span[contains(text(), 'Learn')]");
        this.sortByPriceButton = page.locator("//thead//p[contains(text(), 'Price')]");
    }

     async navigate() {
        await this.page.goto(this.url);
    }

    async searchForCryptocurrency(cryptocurrencyName: string){
        this.searchWord = cryptocurrencyName;
        await this.searchbar.click();
        await this.fillInSearchword(cryptocurrencyName);
    }

    async fillInSearchword(searchword: string){
        await this.page.getByPlaceholder('Search coin, pair, contract address, exchange, or post').fill(searchword);
    }

    async performSearch(){
        await this.page.getByPlaceholder('Search coin, pair, contract address, exchange, or post').press('Enter');
        await this.page.waitForSelector('.coin-name-pc');
    }

     getSearchResultElementLocator(){
        return "//div[@class='tippy-content']//a[contains(@href, '" + this.searchWord + "')]";
    }

    async verifyTheSearchedCryptocurrencyIsDisplaeyd(){
        return await this.page.locator(this.getSearchResultElementLocator()).isVisible();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
      }

    async sortByPrice(){
        await this.sortByPriceButton.click();
    }

    async verifySortByPrice(){
        return await this.page.locator("//thead//p[contains(text(), 'Price')]/..//span[@class='icon-Caret-down']").isVisible;
    }

    async clickOnChangeCurrencyButton(){
        await this.page.click("[data-qa-id='button-global-currency-picker']");
    }

    async searchForEuro(){
        await this.page.getByPlaceholder('Search', { exact: true }).fill('Euro');
    }

    async selectEuro(){
        await this.page.getByText('Euro').first().click();
    }

    async changeTheCurrencyToEuro(){
        await this.clickOnChangeCurrencyButton();
        await this.searchForEuro();
        await this.selectEuro();
    }

    async verifyTheCurrencyIsEuro(){
       // if the target is closed then the language is changed
        try {
           
            await this.logoImage.isVisible();
            return false;
        } catch (error) {
            
            return true;
        }
    }

    async selectOnly20Results(){
        await this.page.getByText('100').nth(2).click();
        await this.page.getByRole('button', { name: '20' }).click();
    }

    async verifyTheResultsAre20(): Promise<boolean>{
        let results: number = await this.page.locator("//table/tbody/tr").count();
        return results === 20;
    }
}