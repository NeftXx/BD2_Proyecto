import * as dotenv from "dotenv";
dotenv.config();

import "module-alias/register";
import app from "@shared/infrastructure/http/app";
import { cassandra } from "@shared/infrastructure/database";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
  cassandra
    .connect()
    .then(() => {
      console.log(`[App]: Se ha conectado a Cassandra`);
    })
    .catch(async (error) =>
      cassandra.shutdown().then(() => {
        throw error;
      })
    )
    .catch((error) => {
      console.error("[Error]: ", error);
      console.error(`[App]: Conexion cerrada de cassandra`);
    });
});
