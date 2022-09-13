import { LoginPage } from '../ui_pages/login_page';
import { MainPage } from '../ui_pages/main_page';
import { CreateEmployeeForm } from '../ui_pages/create_employee_tab';


class AppUI {
    constructor(page) {
        this.page = page;
        this.Login_Page = new LoginPage(this.page);
        this.Main_Page = new MainPage(this.page);
        this.Create_Employee_Form = new CreateEmployeeForm(this.page);
      }
}

module.exports = {AppUI}