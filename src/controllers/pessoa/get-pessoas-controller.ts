import { Request, Response } from "express";
import { getPessoasService } from "../../services/pessoa/get-pessoas-service";

export const getPessoas = async (_req: Request, res: Response) => {
  try {
    const pessoas = await getPessoasService();
    res.status(200).json(pessoas);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao buscar pessoas", error: error.message });
  }
};
