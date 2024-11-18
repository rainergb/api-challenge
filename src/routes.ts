import { Router } from "express";
import { getPessoas } from "./controllers/get-pessoas-controller";
import { getPessoaById } from "./controllers/get-pessoa-id-controller";
import { createPessoa } from "./controllers/create-pessoa-controller";
import { updatePessoa } from "./controllers/update-pessoa-controller";
import { deletePessoa } from "./controllers/delete-pessoa-controller";

const router = Router();

// Rotas GET
router.get("/", getPessoas);
router.get("/:id", getPessoaById);

// Rotas POST
router.post("/", createPessoa);

// Rotas PUT
router.put("/:id", updatePessoa);

//Rotas Delete
router.delete("/:id", deletePessoa);

export default router;
