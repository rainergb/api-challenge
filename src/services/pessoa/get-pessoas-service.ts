import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPessoasService = async () => {
  return await prisma.person.findMany();
};
