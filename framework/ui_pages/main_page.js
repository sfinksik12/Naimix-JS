class MainPage {
    constructor(page) {
        this.page = page;
        this.CREATE_COMPANY_BTN = page.locator("text=Создать компанию")
      }

    async create_company_click() {
        await this.CREATE_COMPANY_BTN.waitFor();
        await this.CREATE_COMPANY_BTN.click();
    }

}

module.exports = {MainPage}