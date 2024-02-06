import { Disciplina } from "../types/disciplina";
import { Semestre } from '../types/semestre';

export interface DisciplinasRepository{
    create(disciplina: Disciplina): Promise<void>;

    listaTodasDisciplinas(): Promise<Array <Disciplina> | null>;
}