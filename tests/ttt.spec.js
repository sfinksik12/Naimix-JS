import { test, expect } from '@playwright/test';
import { AppUI } from '../framework/base/base_ui_app';
import { AppAPI } from '../framework/base/base_api_app';
import roles from '../framework/data/roles';
import employee from '../framework/data/employee';

// Arrange
let app_ui;
let app_api;
let token;


test.beforeEach(async ({ page, request }) =>{
    app_ui = new AppUI(page);
    app_api = new AppAPI(request);
    token = await app_api.Authentication_Api.auth_as(roles.AdminNaimix);

    await app_ui.Login_Page.login_as(roles.AdminNaimix);
    await app_ui.Main_Page.create_company_click();
    await app_ui.Create_Employee_Form.load_page();
    await app_ui.Create_Employee_Form.close_filters();
    await app_ui.Create_Employee_Form.create_employee_click();
});
  
// Act
employee.forEach(data => {
  test(`Create user: ${data.lastname} ${data.firstname} ${data.sername}`, async ({ }) => {    
      const input_data = await test.step(`Get input_data by: ${data.lastname}`, async () => {
        return await app_ui.Create_Employee_Form.fill_fields(
          data.lastname, data.firstname, data.sername,
          data.snils, data.inn,
          data.position, data.role,
          data.phone, data.email,
          data.password, data.repeatPassword
      )
    })
      await app_ui.Create_Employee_Form.click_add_user();

      const response_data = await test.step(`Get response_data by: ${data.lastname}`, async () => {
        return await app_api.Get_Company_User_Info.by_fio_filter(token, data.lastname, data.firstname, data.sername);
    })
// Assert
    expect(input_data).toEqual(response_data);
  })
})