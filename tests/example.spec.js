import { test } from '@playwright/test';
import { AppAPI } from '../framework/base/base_api_app';
import roles from '../framework/data/roles';
import employee from '../framework/data/employee';


let app_api;
let token;


test(`Create user`, async ({ page, request }) => {
  app_api = new AppAPI(request);
  token = await app_api.Authentication_Api.auth_as(roles.AdminNaimix);
  const res = await app_api.Get_Company_User_Info.get_by_fio_filter(token);
  console.log(res);
})