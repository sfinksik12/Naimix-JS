import roles from '../framework/data/roles';
import employee from '../framework/data/employee';
import { test, request } from '@playwright/test';
import { LoginPage } from '../framework/ui_pages/login_page';
import { MainPage } from '../framework/ui_pages/main_page';
import { CreateEmployeeForm } from '../framework/ui_pages/create_employee_tab';
import { AuthenticationApi } from '../framework/api_pages/authentication';
  

test.beforeEach(async ({ page, request }) =>{
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const auth_api = new AuthenticationApi(request);
  
  const token = await auth_api.api_auth_as(roles.AdminNaimix);
  await loginPage.login_as(roles.AdminNaimix);
  await mainPage.create_company_click();
});


employee.forEach(data => {
  test(`get input_data ${data.lastname}`, async ({ page }) => {
    const employee_form = new CreateEmployeeForm(page);
    await employee_form.load_page();
    await employee_form.create_employee_click();
  
    const input_data = await test.step(`get input_data ${data.inn}`, async () => {
      return await employee_form.fill_fields(
        data.lastname, data.firstname, data.sername,
        data.snils, data.inn,
        data.position, data.role,
        data.phone, data.email,
        data.password, data.repeatPassword
      )
    })
    await employee_form.click_add_user();
    console.log(input_data);
  })
})
