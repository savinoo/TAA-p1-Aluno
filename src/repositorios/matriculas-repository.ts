import {Matricula} from '../entities/matricula/matricula'
import { Aluno } from '../types/aluno';
import { Disciplina } from '../types/disciplina';

export interface MatriculasRepository{
    create(matricula: Matricula): Promise<void>;

    encontraMatriculaDuplicada(aluno: Aluno, disciplina: Disciplina): Promise<Matricula | null>;

    listarAlunosMatriculadosDisciplina(disciplina: Disciplina): Promise<Matricula[] | null>;
}