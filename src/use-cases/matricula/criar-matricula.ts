import { Matricula } from '../../entities/matricula/matricula'
import { MatriculasRepository } from '../../repositorios/matriculas-repository';
import{Semestre} from '../../types/semestre'

interface CriaMatriculaRequest {
    aluno: string;
    disciplina: string;
    periodo: Semestre;
    professor: string;
}

type CriaMatriculaResponse = Matricula

export class CriaMatricula {
    constructor(private matriculasRepository : MatriculasRepository){
        
    }

    async executar({
        aluno,
        disciplina,
        periodo,
        professor
    }: CriaMatriculaRequest): Promise<CriaMatriculaResponse>{
        const matriculaDuplicada = await this.matriculasRepository.encontraMatriculaDuplicada(
            aluno,
            disciplina,
            periodo
        )

        if(matriculaDuplicada){
            throw new Error('Essa matrícula já foi realizada');
        }

        const matricula = new Matricula({
            aluno,
            disciplina,
            periodo,
            professor
        })

        await this.matriculasRepository.create(matricula)

        return matricula
    }
}