import { Router } from "express";
import { createUser } from "./controllers/user/create-user-controller";
import { authMiddleware } from "./middlewares/auth-middleware";
import { createPessoa } from "./controllers/pessoa/create-pessoa-controller";
import { getPessoas } from "./controllers/pessoa/get-pessoas-controller";
import { getPessoaById } from "./controllers/pessoa/get-pessoa-id-controller";
import { updatePessoa } from "./controllers/pessoa/update-pessoa-controller";
import { deletePessoa } from "./controllers/pessoa/delete-pessoa-controller";
import { authUser } from "./controllers/user/auth-user-controller";
import { detailUser } from "./controllers/user/detail-user-controller";

const router = Router();

// Rotas Users
router.post("/users", createUser); // Rota para registrar usuários
router.post("/login", new authUser().handle);
router.get("/me", authMiddleware, new detailUser().handle);

// Rotas Person
router.get("/", getPessoas);
router.get("/:id", getPessoaById);
// Rotas POST, PUT, DELETE (Protegidas com autenticação JWT)
router.post("/", authMiddleware, createPessoa);
router.put("/:id", authMiddleware, updatePessoa);
router.delete("/:id", authMiddleware, deletePessoa);

export default router;
