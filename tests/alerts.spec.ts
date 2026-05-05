import { test, expect, Locator } from '@playwright/test';

test ("Alerts", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/javaScript-alert.php");
    await page.waitForTimeout(3000);
    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(3000);
        console.log("Allert type: " + dialog.type());
        console.log("Allert message: " + dialog.message());
        await dialog.accept();
        //await dialog.dismiss();
        await dialog.accept("Test");
    });
    await page.getByText("Show Confirm").click();
    await page.waitForTimeout(3000);
});

test ("Excercise 1", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.waitForTimeout(3000);
    await page.getByText("Alerts, Frame & Windows").click();
    await page.waitForTimeout(3000);
    await page.locator("//span[text()='Alerts']").click();
    await page.waitForTimeout(3000);
    await page.getByText("Alerts").click();
    await page.waitForTimeout(3000);
    page.on("dialog", async (dialog) => {
        console.log("Allert text: " + dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept();
    });
});

test ("Excercise 2", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.waitForTimeout(3000);
    await page.getByText("Alerts, Frame & Windows").click();
    await page.waitForTimeout(3000);
    await page.locator("//span[text()='Alerts']").click();
    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(3000);
        console.log("Allert text: " + dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept("You selected ok");
    });
    await page.locator("#confirmButton").click();
    await page.waitForTimeout(3000);
    //await page.locator("#confirmButton").click();
    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(3000);
        console.log("Allert text: " + dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept();
    });
    await page.locator("#confirmButton").click();
    await page.waitForTimeout(3000);
});

test("Allerts exercise two second version", async ({ page }) => {
  let shouldAccept: boolean = true;
  await page.goto("https://demoqa.com/");
  await page.waitForTimeout(3000);
  await page.locator("//h5[text()='Alerts, Frame & Windows']").click();
  await page.waitForTimeout(3000);
  await page.locator("//span[text()='Alerts']").click();
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    if (shouldAccept) {
      await dialog.accept();
    } else {
      await dialog.dismiss();
    }
  });
  await page.locator("#confirmButton").click();
  console.log(
    "Confirm message: " + (await page.locator("#confirmResult").textContent()),
  );
  shouldAccept = false;
  await page.locator("#confirmButton").click();
  console.log(
    "Confirm message: " + (await page.locator("#confirmResult").textContent()),
  );
  await page.waitForTimeout(3000);
});