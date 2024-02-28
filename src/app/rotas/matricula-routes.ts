import express, { Express, Request, Response } from "express";
import { MatriculaController } from "../controller/matricula-controller";
//const matriculaController = require ("./controller/matricula-controller");

const matricula_router =  express.Router();
const m_controller = new MatriculaController();

matricula_router.post('/api/matricula',(req, resp) => m_controller.matricularAluno(req, resp));

module.exports = matricula_router;
export {matricula_router as disciplina_router}

