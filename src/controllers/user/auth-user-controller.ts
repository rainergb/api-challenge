import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/auth-user-service";

class authUser {
  async handle(req: Request, res: Response) {
    const { identifier, password } = req.body;

    try {
      const auth = await AuthUserService(identifier, password);

      return res.json(auth);
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  }
}

export { authUser };
