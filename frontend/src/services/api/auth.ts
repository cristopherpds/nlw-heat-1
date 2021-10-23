import { UserType } from '../../@types';
import { api } from '.';

export class AuthService {
  private static BASE_ENDPOINT = '/auth';

  public static async githubLogin(code: string) {
    const response = await api.post<{token: string, user: UserType}>(
      `${this.BASE_ENDPOINT}/github/login`,
      { code },
    );

    return response.data;
  }
}
