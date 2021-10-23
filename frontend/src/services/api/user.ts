import { UserType } from '../../@types';
import { api } from '.';

export class UserService {
  private static BASE_ENDPOINT = '/users';

  public static async getProfile() {
    const response = await api.get<UserType>(
      `${this.BASE_ENDPOINT}/profile`,
    );

    return response.data;
  }
}
