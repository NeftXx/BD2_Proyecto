import * as service from "./service";
import { Request, Response, NextFunction } from "express";

export const operationsByAnAccountHolder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const results = await service.operationsByAnAccountHolder(body).catch(next);
  return res.send(results);
};

export const totalCreditsAndDebitsByInstitution = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const results = await service
    .totalCreditsAndDebitsByInstitution(body)
    .catch(next);
  return res.send(results);
};

export const accounts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const results = await service.accounts().catch(next);
  return res.send(results);
};

export const institutions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const results = await service.institutions().catch(next);
  return res.send(results);
};

export const transactionsByCui = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const results = await service.transactionsByCui(body).catch(next);
  return res.send(results);
};
