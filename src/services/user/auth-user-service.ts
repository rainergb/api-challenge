import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AuthUserService = async (identifier: string, password: string) => {
  // Tenta encontrar o usuário pelo nome ou email
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { name: identifier }]
    }
  });

  // Loga o usuário encontrado (ou undefined se não encontrou)
  console.log("Usuário Encontrado:", user);

  if (!user) {
    throw new Error("User/Senha incorretos");
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    throw new Error("User/Senha incorretos");
  }

  // Gera o token JWT
  const token = jwt.sign({ id: user.id }, authConfig.secret, {
    subject: user.id.toString(),
    expiresIn: authConfig.expiresIn
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token
  };
};
