
import { Disciplina } from "../../types/disciplina";
import { DisciplinasRepository } from "../disciplinas-repository";


export class InMemoryDisciplinasRepository implements DisciplinasRepository{
    public items: Disciplina[] = []

    async create(disciplina: Disciplina): Promise<void> {
        this.items.push(disciplina)
    }
    
    async listaTodasDisciplinas(): Promise<Disciplina[] | null> {     

        return [...this.items];
    }
}