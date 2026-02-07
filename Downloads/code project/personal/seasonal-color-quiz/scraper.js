//TODO: scrape images off the internet to train AI to analyze seasonal color matches
import puppeteer from 'puppeteer';

const scrape = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = '';
    await page.goto(url);
    const images = await page.evaluate(() => {
        const imageElements = document.querySelectorAll('')

    })
}