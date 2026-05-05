import { test, expect, Locator } from '@playwright/test';

test ("Exercise 3", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.waitForTimeout(3000);
    await page.getByText("Alerts, Frame & Windows").click();
    await page.waitForTimeout(3000);
    await page.locator("//span[text()='Alerts']").click();
    page.on("dialog", async (dialog) => {
        console.log("Allert text: " + dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept("Test");
        await page.waitForTimeout(3000);
    });
    await page.locator("#promtButton").click();
    await page.waitForTimeout(3000);
    await page.locator("#promptResult").textContent();
    console.log("Confirm message: " + (await page.locator("#promptResult").textContent()),);
});

test ("Exercise 4", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.waitForTimeout(3000);
    await page.getByText("Alerts, Frame & Windows").click();
    await page.waitForTimeout(3000);
    await page.locator("//span[text()='Frames']").click();
    const frame1 = page.frameLocator("#frame1");
    const frame2 = page.frameLocator("#frame2");
    const text1 = await frame1.locator('#sampleHeading').textContent();
    const text2 = await frame2.locator('#sampleHeading').textContent();
    console.log(`Text from Frame 1: ${text1}`);
    console.log(`Text from Frame 2: ${text2}`);
});

test ("Exercise 5", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.waitForTimeout(3000);
    await page.getByText("Alerts, Frame & Windows").click();
    await page.locator("//span[text()='Nested Frames']").click();
    // Parent Frame
    const parentFrame = page.frameLocator("#frame1");
    const parentText = await parentFrame.locator("body").textContent();
    console.log(`Parent Frame Text: ${parentText?.trim()}`);
    // Child Frame
    const childFrame = parentFrame.frameLocator("iframe");
    const childText = await childFrame.locator("//p").textContent();
    console.log(`Child Frame Text: ${childText?.trim()}`);

});

test ("Exercise 6", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/iframe.php");
    // Click the First Frame
    const firstIframe = page.frameLocator("#frame1");
    const firstButton = firstIframe.getByRole("button", {name:"CLick Me"});
    await firstButton.click();
    const firstIframeText = await firstIframe.locator("#message").textContent();
    console.log(`First Text: ${firstIframeText}`);
    // Click the Second Frame


});

test ("Exercise 7", async ({ page, context }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Alerts, Frame & Windows").click();
    await page.locator("//span[text()='Browser Windows']").click();
    const pagePromise = context.waitForEvent("page");
    await page.locator("#tabButton").nth(0).click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.locator("//h1").textContent());
});

test ("Exercise 8", async ({ page, context }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Alerts, Frame & Windows").click();
    await page.locator("//span[text()='Browser Windows']").click();
    const pagePromise = context.waitForEvent("page");
    await page.locator("#windowButton").nth(0).click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.locator("//h1").textContent());
    console.log(await newPage.title());
    const pageOne = await context.newPage();
    await pageOne.goto("https://www.setec.mk/");
    console.log(await pageOne.title());
    await page.waitForTimeout(3000);
    const pageTwo = await context.newPage();
    await pageTwo.goto("https://www.anhoch.com/");
    console.log(await pageTwo.title());
    await page.waitForTimeout(3000);
    const pageThree = await context.newPage();
    await pageThree.goto("https://www.neptun.mk/");
    console.log(await pageThree.title());
    await page.waitForTimeout(3000);
});