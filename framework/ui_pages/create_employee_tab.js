class CreateEmployeeForm {
    constructor(page) {
        this.page = page;
        this.input_data = {};
        this.URL = 'https://nm-test.mmtr.ru/client-card/d4838625-5295-4122-8dba-210aa768a2c2/members-list';
        this.CREATE_NEW_EMPLOYEE_BTN = page.locator('text=Добавить сотрудника');

        this.CLOSE_FILTERS = page.locator('body > div.nm-page-vertical-filter.nm-page-vertical-filter_open > div > div.nm-page-vertical-filter__title > svg')

        this.LASTNAME = page.locator('[name=lastName]');
        this.NAME = page.locator('[name=firstName]');
        this.SERNAME = page.locator('[name=patronymic]');

        this.SNILS = page.locator('[name=snils]');
        this.INN = page.locator('[name=inn]');

        this.POSITION = page.locator('[id=position]');
        this.ROLE = page.locator('[id=role]');
        this.TINELONG = page.locator('label.nm-checkbox-v2__box');

        this.PHONE = page.locator('[name=phone]');
        this.EMAIL = page.locator('[name=email]');

        this.PASSWORD = page.locator('[name=password]');
        this.REPEAT_PASSWORD = page.locator('[name=repeatPassword]');

        this.CANSEL = page.locator('button.apply-buttons__cancel.nm-button.nm-button_color-white.nm-button_size-xl');
        this.ADD = "button.apply-buttons__submit"
      }

    async load_page() {
        await this.page.goto(this.URL);
    }

    async close_filters() {
        await this.CLOSE_FILTERS.click();
    }

    async create_employee_click() {
        await this.CREATE_NEW_EMPLOYEE_BTN.click();
    }

    async choose_drop_down_element(title) {
        await this.page.locator('div.nm-dropdown-v2__item-content[title=' + title + ']').click();
    }

    async fill_fields(lastname, firstname, sername, snils, inn, position, role, phone, email, password, repeatPassword) {
        await this.LASTNAME.fill(this.input_data['lastname'] = lastname);
        await this.NAME.fill(this.input_data['firstname'] = firstname);
        await this.SERNAME.fill(this.input_data['sername'] = sername);

        await this.SNILS.fill(this.input_data['snils'] = snils);
        await this.INN.fill(this.input_data['inn'] = inn);

        await this.POSITION.click();
        await this.choose_drop_down_element(position);
        await this.ROLE.click();
        await this.choose_drop_down_element(role);

        await this.PHONE.fill(this.input_data['phone'] = phone);
        await this.EMAIL.fill(this.input_data['email'] = email);

        await this.PASSWORD.fill(password);
        await this.REPEAT_PASSWORD.fill(repeatPassword);
         
        return this.input_data;
    }
    
    async click_add_user() {
        await this.page.evaluate(() => document.querySelector("button.apply-buttons__submit").click());
        await this.CREATE_NEW_EMPLOYEE_BTN.hover();
    }

}

module.exports = {CreateEmployeeForm}