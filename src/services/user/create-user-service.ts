import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

interface CreateUserData {
  name: string;
  email: string;
  password: string;
}

export const createUserService = async (data: CreateUserData) => {
  const { name, email, password } = data;

  // Verificar se o usuário já existe
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar o usuário no banco de dados
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  return newUser;
};
