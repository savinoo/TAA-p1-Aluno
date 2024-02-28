
import { E } from "vitest/dist/reporters-1evA5lom";
import { Aluno } from "../../types/aluno";
import { AlunosRepository } from "../alunos-repository";

export class InMemoryAlunosRepository implements AlunosRepository{
    public items: Aluno[] = []

    async create(aluno: Aluno): Promise<void> {
        this.items.push(aluno)
    }
    
    async encontraAlunoPorMatricula(matricula: string): Promise<Aluno | Error>{
        const alunoFind = this.items.find((aluno) => aluno.matricula == matricula);

        if (!alunoFind) {
            return new Error('Aluno não encontrado no bd');
        }

        return {... alunoFind};
    }
}