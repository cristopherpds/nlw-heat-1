import { MessageType } from '../../@types';
import { api } from '.';

export class MessageService {
  private static BASE_ENDPOINT = '/messages';

  public static async get(limit?: number) {
    const response = await api.get<MessageType[]>(
      `${this.BASE_ENDPOINT}`,
      {
        params: { limit },
      },
    );

    return response.data;
  }

  public static async create(text: string) {
    const response = await api.post<MessageType>(
      `${this.BASE_ENDPOINT}`,
      {
        text,
      },
    );

    return response.data;
  }
}
