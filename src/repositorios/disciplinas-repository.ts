import { Disciplina } from "../types/disciplina";

export interface DisciplinasRepository{
    create(disciplina: Disciplina): Promise<void>;

    listaTodasDisciplinas(): Promise<Array <Disciplina> | null>;

    buscaDisciplina(id: string, ano: number, semestre: number): Promise<Disciplina | null>;
}