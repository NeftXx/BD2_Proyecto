import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { v1Router } from "./api";
import { ErrorMiddleware, NotFoundMiddleware } from "./middlewares";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api/v1", v1Router);
app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);

export default app;
