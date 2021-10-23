export type UserType = {
  id: number;
  name: string;
  githubId: number;
  avatarUrl: string;
  login: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MessageType = {
  id: number;
  text: string;
  userId: string;
  user: UserType;
  createdAt: Date;
  updatedAt: Date;
}
