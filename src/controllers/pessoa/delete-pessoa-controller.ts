import { Request, Response } from "express";
import { deletePessoaService } from "../../services/pessoa/delete-pessoa-service";

export const deletePessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deletePessoaService(id);
    res.status(200).json({ message: "Pessoa deletada com sucesso" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao deletar pessoa", error: error.message });
  }
};
