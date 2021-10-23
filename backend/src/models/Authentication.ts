import axios from 'axios';
import { sign } from 'jsonwebtoken';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, JWT_SECRET } from '../configs/environment';
import prisma from '../prisma';

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

export class Authentication {
  public static async githubLogin(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    const response = await axios.get<IUserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      },
    );

    const {
      login, id, avatar_url, name,
    } = response.data;

    let user = await prisma.user.findFirst({
      where: {
        githubId: id,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          githubId: id,
          login,
          avatarUrl: avatar_url,
          name,
        },
      });
    }

    const token = sign(
      {
        user: {
          name: user.name,
          avatarUrl: user.avatarUrl,
          id: user.id,
        },
      },
      JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return { token, user };
  }
}
