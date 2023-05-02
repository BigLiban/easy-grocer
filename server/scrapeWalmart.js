const puppeteer = require("puppeteer");

(async () => {
    //Non headless mode, for headless mode, said to true
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto("https://www.walmart.ca/en");

    await page.click('#typeahead-search-input');

    await wait(5000);

    await browser.close();


})();