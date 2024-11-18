import { Request, Response } from "express";
import { Person } from "../models";

export const getPessoas = async (req: Request, res: Response) => {
  try {
    const pessoas = await Person.findAll();
    res.status(200).json(pessoas);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao buscar pessoas", error: error.message });
  }
};
