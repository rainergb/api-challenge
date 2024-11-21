import { Request, Response } from "express";
import { createPessoaService } from "../../services/pessoa/create-pessoa-service";

export const createPessoa = async (req: Request, res: Response) => {
  try {
    const { nome, idade } = req.body;
    const novaPessoa = await createPessoaService({ nome, idade });
    res.status(201).json(novaPessoa);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao criar pessoa", error: error.message });
  }
};
