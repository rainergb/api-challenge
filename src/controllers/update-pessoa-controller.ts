import { Request, Response } from "express";
import { Person } from "../models";

export const updatePessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;

    const pessoa = await Person.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    pessoa.nome = nome;
    pessoa.idade = idade;
    await pessoa.save();

    res.status(200).json(pessoa);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar pessoa", error: error.message });
  }
};
