import prismaClient from "../../prisma";

class DetailUserService {
  async execute(userId: number) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: userId
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return user;
  }
}

export { DetailUserService };
