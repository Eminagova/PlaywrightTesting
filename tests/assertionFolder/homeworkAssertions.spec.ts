import { expect, test } from '@playwright/test';

test ("Fill Students Registration Form and Validate the Submitting Form", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder("First Name").fill("Test");
    await page.getByPlaceholder("Last Name").fill("Testovski");
    await page.locator("#userEmail").fill("testing@gmail.com");
    await page.getByRole("radio", {name:"Male", exact:true}).check();
    await page.getByPlaceholder("Mobile Number").fill("0038975100");
    const subjectsInput = page.locator("#subjectsInput");
    await subjectsInput.click();
    await subjectsInput.fill("eng");
    await page.locator(".subjects-auto-complete__option ").first().click();
    await page.getByRole("checkbox", {name:"Music", exact:true}).check();
    await page.getByPlaceholder("Current Address").fill("Ulica 10");
    await page.locator("#state").click();
    await page.getByText('NCR', { exact: true }).click();
    await page.locator("#city").click();
    await page.getByText('Delhi', { exact: true }).click();
    await page.locator("#submit").click();
    // Assertions
    const submittingForm = page.locator(".modal-content");
    await expect(submittingForm).toBeVisible();
    await expect(submittingForm).toContainText("Test Testovski");
    await expect(submittingForm).toContainText("testing@gmail.com");
    await expect(submittingForm).toContainText("Male");
    await expect(submittingForm).toContainText("0038975100");
    await expect(submittingForm).toContainText("English");
    await expect(submittingForm).toContainText("Music");
    await expect(submittingForm).toContainText("Ulica 10");
    await expect(submittingForm).toContainText("NCR Delhi");   
});