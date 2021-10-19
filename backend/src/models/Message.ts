import prisma from '../prisma';

export class Message {
  public static async create(text: string, userId: string) {
    const message = await prisma.message.create({
      data: {
        text,
        userId,
      },
      include: {
        user: true,
      },
    });

    return message;
  }

  public static async findMany(limit?: number) {
    const messages = await prisma.message.findMany({
      take: limit || 10,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}
