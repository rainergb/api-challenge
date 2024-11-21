import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPessoaByIdService = async (id: string) => {
  return await prisma.person.findUnique({ where: { id: Number(id) } });
};
