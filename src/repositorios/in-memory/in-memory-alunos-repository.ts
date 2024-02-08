
import { Aluno } from "../../types/aluno";
import { AlunosRepository } from "../alunos-repository";

export class InMemoryAlunosRepository implements AlunosRepository{
    public items: Aluno[] = []

    async create(aluno: Aluno): Promise<void> {
        this.items.push(aluno)
    }
    
    async encontraAlunoPorMatricula(matricula: string): Promise<Aluno | null>{
        const alunoFind = this.items.find((aluno) => aluno.matricula == matricula);

        if (!alunoFind) {
            throw new Error('Aluno não encontrado no bd');
        }

        return alunoFind;
    }
}