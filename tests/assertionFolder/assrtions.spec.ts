import { expect, test } from '@playwright/test';

test ("Visible and state Assertions", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    await expect(page.getByRole("button", {name: "Add", exact:true})).toBeVisible();
    //await expect(page.getByRole("button", {name: "Add", exact:true})).toBeHidden();

    const searchInput = page.getByRole("textbox", {name:"Type to search", exact:true});
    await expect(searchInput).toBeEnabled();
    //await expect(searchInput).toBeDisabled();
});

test ("Text and value assertions", async ({ page }) => {
    await page.goto("https://demoqa.com/links");
    await page.getByRole("link", {name: "Created", exact:true}).click();
    //await expect(page.locator("#linkResponse")).toHaveText("Link has responded with staus 201 and status text Created");
    //await expect(page.locator("#linkResponse")).toHaveText("link has responded with staus 201 and status text created", {ignoreCase:true});
    await expect(page.locator("#linkResponse")).toContainText("Created");
    await expect(page.locator("#linkResponse")).toContainText("created", {ignoreCase:true});

    const createdButton = await page.getByRole("link", {name: "Created", exact:true});
    await expect(createdButton).toHaveAttribute("id", "created");
});

test ("Page level assertions", async ({ page }) => {
    await page.goto("https://demoqa.com/links");
    await expect(page).toHaveURL("https://demoqa.com/links");
    await expect(page).toHaveTitle("demosite");
});

test ("The not modifier", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    const firstButton = page.getByRole("button", {name:"First", exact:true});
    await expect(firstButton).toBeDisabled();
    await expect(firstButton).not.toBeEnabled();
    await expect(page.getByRole("cell", {name: "Cierra", exact:true})).not.toHaveText("Adam");
});

test ("Soft assertions", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    const firstButton = page.getByRole("button", {name:"First", exact:true});
    await expect.soft(firstButton).toBeDisabled();
    await expect.soft(firstButton).not.toBeEditable();
    await expect.soft(page.getByRole("cell", {name: "Cierra", exact:true})).not.toHaveText("Adam");
});

test ("Fill the fields and click submit", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.getByRole("textbox", {name:"Full Name"}).fill("Test Testovski");
    await page.locator("#userEmail").fill("test@gmail.com");
    await page.getByPlaceholder("Current Address").fill("Ulica 5");
    await page.locator("#permanentAddress").fill("Ulica 10");
    await page.getByRole("button", {name: "Submit"}).click();
    // Assertions
    await expect.soft(page.locator("#name")).toContainText("Test Testovski");
    await expect.soft(page.locator("#email")).toContainText("test@gmail.com");
    await expect.soft(page.locator("p#currentAddress")).toContainText("Current Address");
    await expect.soft(page.locator("p#permanentAddress")).toContainText("Ulica 10");
});

test ("Click Yes, Impressive and No", async ({ page }) => {
    await page.goto("https://demoqa.com/radio-button");
    // Yes 
    const yesRadio = page.getByRole("radio", {name:"Yes", exact:true});
    await yesRadio.check();
    const paragraph = page.getByRole("paragraph");
    await expect(paragraph).toHaveText("You have selected Yes");
    await expect(yesRadio).toBeChecked();
    // Impressive 
    const impressiveRadio = page.getByRole("radio", {name:"Impressive", exact:true});
    await impressiveRadio.check();
    await expect(paragraph).toHaveText("You have selected Impressive");
    await expect(impressiveRadio).toBeChecked();
    // No
    const noRadio = page.getByRole("radio", {name:"No", exact:true});
    await expect(noRadio).not.toBeChecked();
    await expect(noRadio).toBeDisabled();
});