import { test, Locator } from "@playwright/test";
//import { setTimeout } from "timers/promises";

// Built in locators
test ("GetByRole locator", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");
    // Get By Label
    await page.getByLabel("First Name:").fill("Marija");
    // Get By Placeholder (Search field)
    await page.getByPlaceholder("Search").fill("Ana");
    // Get By Alt Text (Images, klikanje na logo)
    await page.getByAltText("Automation").click();  //Substring
    // Get By Title
    await page.getByTitle("course-33").click();
    // Get By Test Id (data test id atribute)
    await page.getByTestId("input").fill("Hallo World");  // Substring
    await page.getByTestId("click-button").click();
});

// Universal Locators: CSS selectors, XPath selectors
test ("Page locator", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");
    // Css selectors
    await page.locator("css=input#firstname").fill("Hallo");
    console.log(await page.locator("css=h1.m-0").textContent());
    let headerLocator: Locator = page.locator("css=h1.m-0");
    console.log(await headerLocator.textContent());   // za poveke akcii- reiskoristuvanje
    await page.locator("css=label[for='lastname']").fill("Hallo");  // Tag and Attribute
    await page.locator("css=input.form-control[name='email']").fill("dimitarpoptrpev@gmail.com"); // Tag, Class and Attribute
    await page.locator("css=input[name^='last]").fill("dimitarpoptrpev@gmail.com");  // Starts with
    await page.locator("css=input.form-control[name$='il']").fill("dimitarpoptrpev@gmail.com");  // Ends with
    await page.locator("css=input[name*='pas']").fill("1234");  // Contains
    console.log(await page.locator("css=tr:nth-child(1) td:nth-child(2)").fill("1234"));  // Child elements- za tabeli
    
    // xPath selectors
    await page.locator("xpath=//input[@name='firstname']").fill("Hallo");  // Standard xPath
    await page.locator("xpath=//input[contains(@name,'last')]").fill("Hallo");  // Using Contains
    await page.locator("xpath=//input[@name='email' and @id='email']").fill("Hallo");  // Using AND
    await page.locator("xpath=//input[@name='email' or @id='email1']").fill("Hallo");  // Using OR 
    await page.locator("xpath=//input[starts-with(@name, 'pas')]").fill("1234");  // Using starts- with
    await page.locator("xpath=//label[text()='City:']").fill("Skopje");  // Using text in xPath
});