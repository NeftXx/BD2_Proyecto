import * as service from "./service";
import { Request, Response } from "express";

export const operationsByAnAccountHolder = async (
  req: Request,
  res: Response
) => {
  const { body } = req;
  const results = await service.operationsByAnAccountHolder(body);
  return res.send(results);
};

export const totalCreditsAndDebitsByInstitution = async (
  req: Request,
  res: Response
) => {
  const { body } = req;
  const results = await service.totalCreditsAndDebitsByInstitution(body);
  return res.send(results);
};

export const accounts = async (req: Request, res: Response) => {
  const results = await service.accounts();
  return res.send(results);
};

export const institutions = async (req: Request, res: Response) => {
  const results = await service.institutions();
  return res.send(results);
};
