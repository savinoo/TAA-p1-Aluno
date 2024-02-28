import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const disciplina_router = require ("./rotas/disciplina-routes");
const matricula_router = require ("./rotas/matricula-routes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(disciplina_router);
app.use(matricula_router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});