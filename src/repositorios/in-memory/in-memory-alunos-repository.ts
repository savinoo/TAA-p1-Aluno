
import { Aluno } from "../../types/aluno";
import { AlunosRepository } from "../alunos-repository";

export class InMemoryAlunosRepository implements AlunosRepository{
    public items: Aluno[] = []

    private static instance: InMemoryAlunosRepository;

    public static getInstanceBD():InMemoryAlunosRepository {
        if(!InMemoryAlunosRepository.instance){
            InMemoryAlunosRepository.instance = new InMemoryAlunosRepository();
        }
        return InMemoryAlunosRepository.instance;
    }

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