import { Aluno } from '../types/aluno';

export interface AlunosRepository{
    create(aluno: Aluno): Promise<void>;

    encontraAlunoPorMatricula(matricula: string): Promise<Aluno | Error>;

}