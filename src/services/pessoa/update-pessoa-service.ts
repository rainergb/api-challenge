import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updatePessoaService = async (
  id: string,
  { nome, idade }: { nome: string; idade: number }
) => {
  return await prisma.person.update({
    where: { id: Number(id) },
    data: { nome, idade }
  });
};
