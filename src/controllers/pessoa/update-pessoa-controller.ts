import { Request, Response } from "express";
import { updatePessoaService } from "../../services/pessoa/update-pessoa-service";

export const updatePessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;
    const pessoaAtualizada = await updatePessoaService(id, { nome, idade });
    res.status(200).json(pessoaAtualizada);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar pessoa", error: error.message });
  }
};
