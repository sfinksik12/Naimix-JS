import { test } from '@playwright/test';
import { AppAPI } from '../framework/base/base_api_app';
import roles from '../framework/data/roles';



test.describe('todo tests', () => {
  let app_api;
  let token;
  let users;

  test('Arhive user', async () => {
    app_api = new AppAPI(request);
    token = await app_api.Authentication_Api.auth_as(roles.AdminNaimix);
    users = await app_api.Get_Company_User_Info.all_users(token);

    for (let i = 0; i < users.length; i++) {
      await app_api.Get_Company_User_Info.archive_all_users(token, users[i]);
    }
  });
});




