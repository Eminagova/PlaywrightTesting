import { test, expect } from '@playwright/test';

test ("Reading values from attributes", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    const fullNameInputIdAtribute = await page.getByPlaceholder("Full Name").getAttribute("id");
    console.log(fullNameInputIdAtribute);
    await page.pause();
});

test ("Sending text", async ({ page }) => {
    // FILL
    await page.goto("https://demoqa.com/text-box");
    await page.getByRole("textbox", {name:"Full Name"}).fill("Marija");
    
    // PRESS SEQUENTALLY
    await page.locator("#userEmail").pressSequentially("test@mail.com", {delay:1000});
});

test ("Click", async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");
    await page.getByRole("button", {name:"Click Me", exact: true}).click();
    await page.getByRole("button", {name:"Right Click Me", exact: true}).click({button:'right'});
    await page.getByRole("button", {name:"Double Click Me", exact: true}).dblclick();
    await page.pause();
});

test ("", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    // CHECK
    await page.getByRole("checkbox").first().check({force: true});
    await page.waitForTimeout(5000);
    // UNCHECK
    await page.getByRole("checkbox").nth(1).uncheck();
});

test ("Press", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    await page.locator("#searchBox").fill("Cierra");
    await page.locator("#searchBox").press("Tab");
});

test ("Mouse movement", async ({ page }) => {
    await page.goto("https://demoqa.com/menu");
    // HOVER
    await page.getByText("Main Item 2").hover();
    await page.waitForTimeout(5000);
    await page.mouse.move(100,100);
});

test ("Scrolling", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    // SCROLL
    //await page.getByText("Book Store Application").scrollIntoViewIfNeeded();
    await page.mouse.wheel(0,500);
    await page.waitForTimeout(5000);

});

test ("Drag and Drop", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    // DRAG TO
    await page.waitForTimeout(3000);
    await page.locator("#column-a").dragTo(page.locator("#column-b"));
    await page.waitForTimeout(5000);

    // Manual Drag nad Drop
    await page.locator("#column-a").hover();
    await page.mouse.down();
    await page.locator("#column-b");
    await page.mouse.up();
});

test ("Search Product", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");
    await page.getByText("Products").click();
    await page.waitForTimeout(5000);
    await page.getByPlaceholder("Search Product").fill("T-Shirt");
    //await page.getByPlaceholder("Search Product").pressSequentially("T-Shirt", {delay:1000});
    await page.locator("#submit_search").click();
    await page.waitForTimeout(5000);
    await page.getByText("Biba").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
});