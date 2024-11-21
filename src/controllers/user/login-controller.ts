import { Request, Response } from "express";
import { authenticateUser } from "../../services/user/login-user-service";

export const login = async (req: Request, res: Response) => {
  const { identifier, password } = req.body;

  try {
    const { token, user } = await authenticateUser(identifier, password);
    return res.status(200).json({ token, user });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};
