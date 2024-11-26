const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/login.page');

test.describe('Login Test Suite', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage('http://192.168.1.127:91/');
  });

   test("click signin and navigate to login page",async({page})=>
{ 
  await page.waitForTimeout(2000);
  await loginPage.presssignin();
  await page.waitForTimeout(3000);
   await loginPage.selectOwnerName();
   const username = '9131069883';
    const password = 'Aparna@123';

  //   // Use the LoginPage object to perform the login action
    await loginPage.login(username, password);



});
 
  //   const newusername = '9131069883';
  //   const newpassword = 'Aparna@123';

  //   // Use the LoginPage object to perform the login action
  //   await loginPage.login(username, password);

  //   // Assert that the user is successfully logged in (e.g., check for the dashboard)
  // //  const dashboardTitle = await page.textContent('.dashboard-title');
  //  // expect(dashboardTitle).toBe('Welcome to Your Dashboard');
  // });

  // test('should display error for invalid credentials', async ({ page }) => {
  //   const username = '9131069883';
  //   const password = 'Admin@123';

  //   await loginPage.login(username, password);

  //   // Assert that the error message is displayed
  //  // const errorMessage = await page.textContent('.error-message');
  //  // expect(errorMessage).toBe('Invalid credentials');
  // });
});