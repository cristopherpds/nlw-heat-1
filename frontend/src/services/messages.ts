import { MessageType } from '../@types';
import { api } from './api';

export class MessageService {
  private static BASE_ENDPOINT = '/messages';

  public static async get(limit?: number) {
    const response = await api.get<MessageType[]>(`${this.BASE_ENDPOINT}`, {
      params: { limit },
    });

    return response.data;
  }
}
