import { Request, Response } from "express";
import { Person } from "../models";

export const createPessoa = async (req: Request, res: Response) => {
  try {
    const { nome, idade } = req.body;

    const novaPessoa = await Person.create({
      nome,
      idade
    } as Person);

    res.status(201).json(novaPessoa);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao criar pessoa", error: error.message });
  }
};
