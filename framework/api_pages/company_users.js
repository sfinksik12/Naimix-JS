import { reformat_phone, reformat_snils } from '../helper/processing_text';


class GetCompanyUserInfo {
    constructor(request) {
        this.request = request;
        this.response_data = {};
        this.url = "https://nm-test.mmtr.ru/api/clients/users/getPage";
      }

    async get_by_fio_filter(token, lastname, firstname, sername) {
        const response = await this.request.post(this.url, {
            data: {
                clientId:"d4838625-5295-4122-8dba-210aa768a2c2",
                pageNum: 1,
                pageSize: 25,
                archiveFilter: false,
                fioSort: 'asc',
                needToEnrichPhantomUsersByClientInfo: true, 
                fioFilter: lastname + ' ' + firstname + ' ' + sername
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
          });
        const json = await response.json();
        const data = json.clientUsers[0];

        this.response_data = {
          'lastname': data['lastName'], 'firstname': data['firstName'], 'sername': data['patronymic'],
          'snils': reformat_snils(data['snils']), 'inn': data['inn'],
          'phone': reformat_phone(data['phone']), 'email': data['email']
        }
        return this.response_data;
    }
}

module.exports = {GetCompanyUserInfo}