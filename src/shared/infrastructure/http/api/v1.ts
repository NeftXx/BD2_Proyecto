import { Router } from "express";
import { reportsRouter } from "@modules/reports/routes";

const v1Router = Router();

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" });
});

v1Router.use("/reports", reportsRouter);

export { v1Router };
