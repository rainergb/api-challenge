import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deletePessoaService = async (id: string) => {
  return await prisma.person.delete({ where: { id: Number(id) } });
};
