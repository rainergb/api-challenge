import { Request, Response } from "express";
import { Person } from "../models";

export const getPessoaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pessoa = await Person.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    res.status(200).json(pessoa);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao buscar pessoa", error: error.message });
  }
};
