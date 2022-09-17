import { test } from '@playwright/test';
import { AppUI } from '../framework/base/base_ui_app';
import { AppAPI } from '../framework/base/base_api_app';
import roles from '../framework/data/roles';
import employee from '../framework/data/employee';


let app_ui;
let app_api;
let token;


test.beforeEach(async ({ page, request }) =>{
    app_ui = new AppUI(page);
    app_api = new AppAPI(request);
    token = await app_api.Authentication_Api.auth_as(roles.AdminNaimix);

    await app_ui.Login_Page.login_as(roles.AdminNaimix);
    await app_ui.Main_Page.create_company_click();
});
  

employee.forEach(data => {
  test(`Create user ${data.lastname}`, async ({ }) => {
      await app_ui.Create_Employee_Form.load_page();
      await app_ui.Create_Employee_Form.close_filters();
      await app_ui.Create_Employee_Form.create_employee_click();
    
      const input_data = await test.step(`Get inpit_data ${data.lastname}`, async () => {
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

      const response_data = await test.step(`Get response_data ${data.lastname}`, async () => {
        return await app_api.Get_Company_User_Info.get_by_fio_filter(token, data.lastname, data.firstname, data.sername);
    })
    console.log(response_data);
  })
})