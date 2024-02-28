import express, { Express, Request, Response } from "express";
import { DisciplinaController } from "../controller/disciplina-controller";
//const disciplinaController = require ("./controller/disciplina-controller");

const disciplina_router =  express.Router();
const d_controller = new DisciplinaController();
disciplina_router.post('/api/disciplina',(req, resp) => d_controller.consultaDisciplinas(req, resp));

module.exports = disciplina_router;
export {disciplina_router}



