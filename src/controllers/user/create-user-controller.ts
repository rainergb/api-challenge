import { Request, Response } from "express";
import { createUserService } from "../../services/user/create-user-service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await createUserService({ name, email, password });

    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({
      message: "Erro ao criar usuário",
      error: error.message
    });
  }
};
