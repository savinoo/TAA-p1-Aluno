
import { Matricula } from "../../entities/matricula/matricula";
import { Semestre } from "../../types/semestre";
import { MatriculasRepository } from "../matriculas-repository";

export class InMemoryMatriculasRepository implements MatriculasRepository{
    public items: Matricula[] = []

    async create(matricula: Matricula): Promise<void> {
        this.items.push(matricula)
    }
    
    async encontraMatriculaDuplicada(aluno: string, disciplina: string, periodo: Semestre): Promise<Matricula | null> {
        const matriculaDuplicada = this.items.find(matricula => {
            return (aluno == matricula.aluno && disciplina == matricula.disciplina && periodo.ano == matricula.periodo.ano && periodo.semestre == matricula.periodo.semestre) ? matricula : false;
        })

        if (!matriculaDuplicada) {
            return null
        }

        return matriculaDuplicada;
    }
}