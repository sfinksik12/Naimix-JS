import { test } from '@playwright/test';
import { AppAPI } from '../framework/base/base_api_app';
import roles from '../framework/data/roles';


let app_api;
let token;

test(`Архив user`, async ({ page, request }) => { 
  app_api = new AppAPI(request);
  token = await app_api.Authentication_Api.auth_as(roles.AdminNaimix);
  const users = await app_api.Get_Company_User_Info.get_all_users(token);

  users.forEach(async element => {
    await app_api.Get_Company_User_Info.archive_all_users(token, element);
  });
})