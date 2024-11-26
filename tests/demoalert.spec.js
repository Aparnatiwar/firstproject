

// test("handle alert", async({page})=>
// {

//     await page.goto("https://demoqa.com/alerts");
//     await page.waitForTimeout(3000);
//     await page.click("//button[@id='alertButton']");
//     // await page.waitForTimeout(4000);

//      page.on('dialog' , async(dialog)=>
    
     
//         await dialog.accept());
//         // await page.waitForTimeout(2000);


// await page.evaluate(() => alert('This is an alert!'));
// });
const { test, expect } =require ('@playwright/test');

test('Handle alert', async ({ page }) =>
{
    
    page.on('dialog', async dialog => {
    
    await page.waitForTimeout(2000);
    await dialog.accept(); 

});

    await page.goto("https://demoqa.com/alerts");
    await page.waitForTimeout(3000);
await page.click("//button[@id='alertButton']");
await page.waitForTimeout(3000);

   
  
   
});


// Confirmation dialog

test(" handle confirmation dialog", async({page})=>
{
    page.on('dialog', async dialog=>
    {
        await dialog.dissmiss();
    });
    
      
    await page.goto("https://demoqa.com/alerts");
    await page.waitForTimeout(3000);
await page.click("//button[@id='confirmButton']");
await page.waitForTimeout(3000);


});


test("Test scroll functionality", async({page})=>
{

await page.goto("https://demoqa.com/alerts")
  // await page.evaluate(()=> window.scrollTo(0, document.body.scrollHeight));
  await page.mouse.wheel(0, 500)
   await page.waitForTimeout(3000);


});
