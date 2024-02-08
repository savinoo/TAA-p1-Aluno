
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

    async buscaDisciplina(id: string, ano: number, semestre: number): Promise<Disciplina | null> {
        const disciplina_find = this.items.find((disc) => (disc.disciplina_base.id == id && disc.semestre_info.ano == ano && disc.semestre_info.semestre == semestre));

        if(!disciplina_find){
            return null;
        }
        
        return {... disciplina_find};
    }
}