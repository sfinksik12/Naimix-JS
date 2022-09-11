class LoginPage {
    constructor(page) {
        this.page = page;
        this.URL = 'https://nm-test.mmtr.ru/login'
        this.LOGIN_FIELD = page.locator('[name=login]');
        this.PASSWORD_FIELD = page.locator('[name=password]');
        this.ENTER_BTN = page.locator("text=Войти");
      }

    async login_as(auth_dict) {
        await this.page.goto(this.URL)
        await this.LOGIN_FIELD.fill(auth_dict.login);
        await this.PASSWORD_FIELD.fill(auth_dict.password);
        await this.ENTER_BTN.click();
    }

}

module.exports = {LoginPage}
