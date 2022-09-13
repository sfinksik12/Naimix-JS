class GetCompanyUserInfo {
    constructor(request) {
        this.request = request;
        this.response_data = {};
        this.url = "https://nm-test.mmtr.ru/api/clients/users/getPage";
      }

    async get_info_by_fio_filter(token, lastname, firstname, sername) {
        const response = await this.request.post(this.url, {
            data: {
                "clientId": "d4838625-5295-4122-8dba-210aa768a2c2",
                "pageNum": 1,
                "pageSize": 25,
                "archiveFilter": False,
                "fioSort": "asc",
                "needToEnrichPhantomUsersByClientInfo": True,
                "fioFilter": `${lastname}, ${firstname}, ${sername}`
            },
            headers: {
                "Accept": "application/json;charset=UTF-8",
                'Authorization': `${token}`,
                'Content-Type': 'application/json;charset=UTF-8'
            },
          });
        const json = await response.json();
        console.log(json);
    }

}

module.exports = {GetCompanyUserInfo}