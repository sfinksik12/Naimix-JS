import { AppUI } from '../framework/base/base_ui_app'
import { test } from '@playwright/test';
import roles from '../framework/data/roles';
import employee from '../framework/data/employee';


let app_ui;

test.beforeEach(async ({ page }) =>{
    app_ui = new AppUI(page);
    await app_ui.Login_Page.login_as(roles.AdminNaimix);
    await app_ui.Main_Page.create_company_click();
  });
  

employee.forEach(data => {
    test(`Create user ${data.lastname}`, async ({ page, request }) => {
        await app_ui.Create_Employee_Form.load_page();
        await app_ui.Create_Employee_Form.create_employee_click();
    
        const input_data = await test.step(`get inpit_data ${data.inn}`, async () => {
        return await app_ui.Create_Employee_Form.fill_fields(
            data.lastname, data.firstname, data.sername,
            data.snils, data.inn,
            data.position, data.role,
            data.phone, data.email,
            data.password, data.repeatPassword
        )
      })
        await app_ui.Create_Employee_Form.click_add_user();
        console.log(input_data);
    })
  })