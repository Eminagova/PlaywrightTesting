import { test, expect, Browser, Page, chromium } from '@playwright/test';

let browser: Browser;
let page: Page;

test("My First Test", async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto("https://www.google.com");
})