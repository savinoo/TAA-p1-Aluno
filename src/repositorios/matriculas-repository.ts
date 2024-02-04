import {Matricula} from '../entities/matricula/matricula'
import { Semestre } from '../types/semestre';

export interface MatriculasRepository{
    create(matricula: Matricula): Promise<void>;

    encontraMatriculaDuplicada(aluno: string, disciplina: string, periodo: Semestre): Promise<Matricula | null>
}