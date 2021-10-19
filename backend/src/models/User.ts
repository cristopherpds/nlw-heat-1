import prisma from '../prisma';

export class User {
  public static async findUnique(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
}
