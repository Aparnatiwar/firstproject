class LoginPage {
    constructor(page) {
      this.page = page;
      this.signin = '//a[text()="Sign in"]'; // Replace with the actual selector
      this.selectowner = '//span[contains(text(),"Owner")]'; // Replace with the actual selector
      this.username="//input[@formcontrolname='email_or_mobile_no']";
      this.password ="//input[@formcontrolname='password']";
      this.loginButton = '//span[text()="Log in"]'; // Replace with the actual selector
    }
  
    async navigateToLoginPage(url) {
      await this.page.goto(url);
    }
  
    async presssignin() {
       
      await this.page.locator(this.signin).click();
    }

    async selectOwnerName() {
      await this.page.locator(this.selectowner).click();
    }
  
    async enterUsername(username) {
      await this.page.locator(this.username).fill(username);
    }
    async enterPassword(password)
    {
        await this.page.locator(this.password).fill(password);
    }

    async clickLoginButton()
    {
        await this.page.click(this.loginButton);
    }
  
    async login(username, password) {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.clickLoginButton();
    }
  
    // Additional methods for assertions or page actions can be added here
  }
  
  module.exports = { LoginPage };