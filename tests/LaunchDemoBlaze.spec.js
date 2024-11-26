const { test, expect} =require("@playwright/test");
 test(" launch demoblaze application", async({page})=>
{
    await page.goto("https://playwright.dev/")
   const page_title= await page.title();
     await expect(page).toHaveTitle(page_title);
     console.log(page_title);
     
});