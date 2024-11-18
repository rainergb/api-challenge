import { Request, Response } from "express";
import { Person } from "../models";

export const deletePessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const pessoa = await Person.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    await pessoa.destroy();

    res.status(200).json({ message: "Pessoa deletada com sucesso" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao deletar pessoa", error: error.message });
  }
};
