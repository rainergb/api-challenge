// @types/express/index.d.ts
import "express";

declare module "express" {
  export interface Request {
    userId?: number;
  }
}
