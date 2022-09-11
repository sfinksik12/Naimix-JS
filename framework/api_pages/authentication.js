class AuthenticationApi {
    constructor(request) {
        this.request = request;
        this.response_data = {};
        this.url = "https://nm-test.mmtr.ru/api/auth/login";
      }

    async api_auth_as(auth_dict) {
        const response = await this.request.post(this.url, {
            data: {
              'login': auth_dict.login,
              'password': auth_dict.password
            }
          });
        const json = await response.json();
        return json.accessToken;
    }

}

module.exports = {AuthenticationApi}