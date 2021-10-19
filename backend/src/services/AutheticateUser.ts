import axios from "axios";

class AutheticateUserService {
  async execute(code: string){
    const url = "https://github.com/login/oauth/access_token";
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    const response = await axios.post(url, null, {
      params: {
        "client_id": clientId,
        "client_secret": clientSecret,
        code
      },
      headers: {
        "Accept": "application/json"
      }
    })

    return response.data;
  }
}

export { AutheticateUserService };
