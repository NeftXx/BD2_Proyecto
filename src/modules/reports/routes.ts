import { Router } from "express";
import * as controller from "./controller";

const reportsRouter = Router();

reportsRouter.post(
  "/operationsByAnAccountHolder",
  controller.operationsByAnAccountHolder
);

reportsRouter.post(
  "/totalCreditsAndDebitsByInstitution",
  controller.totalCreditsAndDebitsByInstitution
);

reportsRouter.post("/accounts", controller.accounts);

reportsRouter.post("/institutions", controller.institutions);

reportsRouter.post("/transactionsByCui", controller.transactionsByCui);

export { reportsRouter };
