import { test, expect, Locator } from '@playwright/test';

test ("Iframes", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/iframe.php");
    await page.waitForTimeout(3000);
    //const frame = page.frame("iframe1");
    //const frame = page.frame({ url: /iframe2/ })
    const frame = page.frameLocator("[src='iframe1.php']");
    if (frame) {
        await frame.getByText("Click Me").click();
    }
    console.log(await page.locator("//h1").textContent());
    await page.waitForTimeout(3000);
});

test ("Nested Iframes", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.goto("https://demoqa.com/nestedframes");
    await page.waitForTimeout(3000);
    const parentFrame = page.frameLocator("#frame1");
        if (parentFrame) {
    const childFrame = parentFrame.frameLocator(
      "[srcdoc='<p>Child Iframe</p>']",
    );
    if (childFrame) {
      console.log(await childFrame.locator("//p").textContent());
    }
  }
    console.log(await page.locator("//h1").textContent());
    await page.waitForTimeout(3000);
});
