import { test, expect } from '@playwright/test';

test ("Fill the fields and click submit", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.waitForTimeout(5000);
    // Fill the Full Name Field
    await page.getByRole("textbox", {name:"Full Name"}).fill("Test Testovski");
    await page.waitForTimeout(5000);
    // Fill the Email Field
    await page.locator("#userEmail").fill("test@gmail.com");
    await page.waitForTimeout(5000);
    // Fill the Current Address Field
    await page.getByPlaceholder("Current Address").fill("Ulica 5");
    await page.waitForTimeout(5000);
    // Fill the Permanent Address Field
    await page.locator("#permanentAddress").fill("Ulica 10");
    await page.waitForTimeout(5000);
    // Click Submit Button
    await page.getByRole("button", {name: "Submit"}).click();
});


test ("Click the Checkboxes", async ({ page }) => {
    await page.goto("https://demoqa.com/checkbox");
    await page.waitForTimeout(3000);
    // Expand "Home"
    await page.locator("//span[@title='Home']/../span[contains(@class,'rc-tree-switcher')]").click();
    await page.waitForTimeout(3000);
    // Expand "Documents"
    await page.locator("//span[@title='Documents']/../span[contains(@class,'rc-tree-switcher')]").click();
    await page.waitForTimeout(3000);
    // Expand "Office"
    await page.locator("//span[@title='Office']/../span[contains(@class,'rc-tree-switcher')]").click();
    await page.waitForTimeout(3000);
    // Click "Publick" checkbox
    await page.getByLabel('Public').check();
    await page.waitForTimeout(3000);
    // Click "Private" checkbox
    await page.getByLabel('Private').check();
    await page.waitForTimeout(3000);
    // Expand "Downloads"
    await page.locator("//span[@title='Downloads']/../span[contains(@class,'rc-tree-switcher')]").click();
    await page.waitForTimeout(5000);
    // Click "Word File.doc" checkbox
    await page.getByLabel('Select Word File.doc').check();
    await page.waitForTimeout(3000);
});

test ("Click Yes and Impressive", async ({ page }) => {
    await page.goto("https://demoqa.com/radio-button");
    await page.waitForTimeout(5000);
    // Check the Yes Button
    await page.getByRole("radio", {name: "Yes"}).check();
    await page.waitForTimeout(5000);
    // Check the Impressive Button
    await page.getByRole("radio", {name: "Impressive"}).check();
});

test ("Fill the Registration Form and Click Submit", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    // Click on Add Button
    await page.getByRole("button", {name: "Add"}).click();
    await page.waitForTimeout(3000);
    // Fill the First Name Field
    await page.getByPlaceholder("First Name").fill("Test");
    await page.waitForTimeout(3000);
    // Fill the Last Name Field
    await page.getByPlaceholder("Last Name").fill("Testovski");
    await page.waitForTimeout(3000);
    // Fill the Email Fild
    await page.getByPlaceholder("name@example.com").fill("test@gmail.com");
    await page.waitForTimeout(3000);
    // Fill the Age Field
    await page.locator("#age").fill("35");
    await page.waitForTimeout(3000);
    // Fill the Salary Field
    await page.locator("#salary").fill("2000");
    await page.waitForTimeout(3000);
    // Fill the Department Field
    await page.locator("#department").fill("IT");
    await page.waitForTimeout(3000);
    // Click Submit Button
    await page.locator("#submit").click();
});