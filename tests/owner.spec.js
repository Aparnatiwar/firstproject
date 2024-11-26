const {test ,expect} = require("@playwright/test");

test("verify launch",async({page})=>
{
    await page.goto("http://192.168.1.127:91/");
    await page.waitForURL("http://192.168.1.127:91/");
     
    const page_title= await page.title();

    const links= await page.$$("a");

    let count=0;
    
    for(let link of links)
    {
        const oneByone = await link.textContent();
        count++;
        console.log(oneByone);
    }
  console.log("total count of links:" +count);

    //console.log(page_title);

    await expect(page).toHaveTitle(page_title);
    await page.waitForTimeout(3000);
    
    await page.locator('//a[text()="Sign in"]').click();
    await page.waitForTimeout(3000);
    console.log(page_title);
    
    await page.click("//span[text()='Owner']");

    await page.waitForTimeout(3000);
   await page.locator("//input[@formcontrolname='email_or_mobile_no']").fill("9131069883");
   await page.waitForTimeout(3000);
    await page.locator("//input[@formcontrolname='password']").fill("Aparna@123");
    await page.waitForTimeout(3000);
    await page.click("//span[text()='Log in']");
    await page.waitForTimeout(3000);



    
   
});