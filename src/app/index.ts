import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//import router from '../app/rotas/login-routes'
const login_router = require ("./rotas/login-routes");
const disciplina_router = require ("./rotas/disciplina-routes");
const matricula_router = require ("./rotas/matricula-routes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(disciplina_router);
app.use(matricula_router);
app.use(login_router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;