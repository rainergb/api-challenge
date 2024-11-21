import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPessoaService = async ({
  nome,
  idade
}: {
  nome: string;
  idade: number;
}) => {
  return await prisma.person.create({
    data: { nome, idade }
  });
};
