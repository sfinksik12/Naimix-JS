import { AuthenticationApi } from '../api_pages/authentication';
import { GetCompanyUserInfo } from '../api_pages/company_users';


class AppAPI {
    constructor(request) {
        this.request = request;
        this.Authentication_Api = new AuthenticationApi(request);
        this.Get_Company_User_Info = new GetCompanyUserInfo(request);
      }
}

module.exports = {AppAPI}