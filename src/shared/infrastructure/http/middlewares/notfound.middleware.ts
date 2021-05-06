import { Request, Response } from "express";

export const NotFoundMiddleware = (req: Request, res: Response, next) =>
  res.status(404).send({ status: 404, message: "resource not found" });
