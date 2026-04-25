import { test, expect } from '@playwright/test';

test ("Exercise 3", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Widgets").click();
    await page.waitForTimeout(3000);
    await page.getByText("Select Menu").click();
    
});