import { test, expect } from '@playwright/test';

test ("Dropdown menu", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/dropdown.php");
    await page.waitForTimeout(3000);
    // Select by visible text
    await page.locator("#fruitDropdown").selectOption("Banana");
    await page.waitForTimeout(3000);
    // Select by label
    await page.locator("#fruitDropdown").selectOption({ label: "Apple" });
    await page.waitForTimeout(3000);
    // Select by value
    await page.locator("#fruitDropdown").selectOption({ value: "Mango" });
    await page.waitForTimeout(3000);
    // Select by index
    await page.locator("#fruitDropdown").selectOption({ index: 4 });
    await page.waitForTimeout(2000);
});

test ("Multiselect Dropdowns", async ({ page }) => {
    await page.goto("https://testing.qaautomationlabs.com/dropdown.php");
    await page.waitForTimeout(2000);
    // Select by visible text
    await page.locator("#countryDropdown").selectOption(["India", "UK"]);
    await page.waitForTimeout(2000);
    // Select by value
    await page.locator("#countryDropdown").selectOption([{ value: "USA" }, { value: "UK" }]);
    await page.waitForTimeout(2000);
    // Select by index
    await page.locator("#countryDropdown").selectOption([{ index: 0 }, { index: 3 }]);
    await page.waitForTimeout(2000);
});

test ("Dynamic Dropdowns", async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(2000);
    await page.locator("#selectOne").click();
    await page.waitForTimeout(2000);
});

test ("Exercise 1", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Widgets").click();
    await page.waitForTimeout(3000);
    await page.getByText("Select Menu").click();
    await page.waitForTimeout(3000);
    await page.locator("#oldSelectMenu").scrollIntoViewIfNeeded();
    await page.locator("#oldSelectMenu").selectOption("Red");
    await page.waitForTimeout(3000);
    await page.locator("#oldSelectMenu").selectOption({ label: "Purple" });
    await page.waitForTimeout(3000);
    await page.locator("#oldSelectMenu").selectOption({ value: "6" });
    await page.waitForTimeout(3000);
    await page.locator("#oldSelectMenu").selectOption({ index: 7 });
    await page.waitForTimeout(3000);
});

test ("Exercise 2", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText("Widgets").click();
    await page.waitForTimeout(3000);
    await page.getByText("Select Menu").click();
    await page.waitForTimeout(3000);
    await page.locator("#cars").selectOption(["Volvo", "Opel"]);
    await page.waitForTimeout(2000);
    await page.locator("#cars").selectOption([{ index: 1 }, { index: 3 }]);
    await page.waitForTimeout(2000);
});