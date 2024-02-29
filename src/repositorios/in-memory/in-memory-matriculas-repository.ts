
import { Matricula } from "../../entities/matricula/matricula";
import { Aluno } from "../../types/aluno";
import { Disciplina } from "../../types/disciplina";
import { MatriculasRepository } from "../matriculas-repository";

export class InMemoryMatriculasRepository implements MatriculasRepository{
    public items: Matricula[] = []

    private static instance: InMemoryMatriculasRepository;

    public static getInstanceBD():InMemoryMatriculasRepository {
        if(!InMemoryMatriculasRepository.instance){
            InMemoryMatriculasRepository.instance = new InMemoryMatriculasRepository();
        }
        return InMemoryMatriculasRepository.instance;
    }

    async create(matricula: Matricula): Promise<void> {
        this.items.push(matricula)
    }
    
    async encontraMatriculaDuplicada(aluno: Aluno, disciplina: Disciplina): Promise<Matricula | null> {
        const matriculaDuplicada = this.items.find(matricula => {
            return (aluno.matricula == matricula.aluno.matricula && disciplina.disciplina_base.id == matricula.disciplina.disciplina_base.id && disciplina.semestre_info.ano == matricula.disciplina.semestre_info.ano && disciplina.semestre_info.semestre == matricula.disciplina.semestre_info.semestre) ? matricula : false;
        })

        if (!matriculaDuplicada) {
            return null
        }

        return matriculaDuplicada;
    }

    async listarAlunosMatriculadosDisciplina(disciplina: Disciplina): Promise<Matricula[] | null>{
        const lista_alunos_por_disciplina = this.items.filter((matricula) => (matricula.disciplina.disciplina_base.id == disciplina.disciplina_base.id && matricula.disciplina.semestre_info.ano == disciplina.semestre_info.ano && matricula.disciplina.semestre_info.semestre == disciplina.semestre_info.semestre));
        return lista_alunos_por_disciplina;
    }
}