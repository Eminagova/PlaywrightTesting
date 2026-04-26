import { test, expect, Locator } from '@playwright/test';

test ("Exercise 3", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Widgets").click();
    await page.waitForTimeout(3000);
    await page.getByText("Select Menu").click();
    await page.locator("#withOptGroup").click();
    await page.getByText("Group 2, option 2").click();
    await page.waitForTimeout(3000);
    const options: Locator = page.locator("#withOptGroup");
    await options.click();
    const count: number = await options.locator("//*[starts-with(@id, 'react-select')]").count();
    console.log(count);
});

test ("Exercise 4", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Widgets").click();
    await page.waitForTimeout(3000);
    await page.getByText("Select Menu").click();
    const withOne = page.locator("#selectOne");
    await withOne.click();
    const elements: Locator = await withOne.locator("//*[starts-with(@id, 'react-select')]");
    const count: number = await elements.count();
    for (let i=0; i < count; i++) {
        const optionText = await elements.nth(i).textContent();
        console.log(optionText);
    }
    for (let i=0; i < count; i++) {
        const optionText = await elements.nth(i).textContent();
        if (optionText?.trim() === "Prof.") {
            await elements.nth(i).click();
            await page.waitForTimeout(3000);
            break;
        }
    }
    await withOne.click();
    await elements.nth(1);
    await page.waitForTimeout(3000);
});