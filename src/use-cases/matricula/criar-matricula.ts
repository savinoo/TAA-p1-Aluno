import { Matricula } from '../../entities/matricula/matricula'
import { MatriculasRepository } from '../../repositorios/matriculas-repository';
import {SemestreInfo} from '../../types/semestre'
import { Aluno } from '../../types/aluno';
import { Disciplina } from '../../types/disciplina';

interface CriaMatriculaRequest {
    aluno: Aluno;
    disciplina: Disciplina;
}

type CriaMatriculaResponse = Matricula

type PontuacaoMatricula = {
    id_aluno : string;
    pontuacao : number;
}

function compararPontuacao( a : PontuacaoMatricula, b : PontuacaoMatricula ) {
    if ( a.pontuacao < b.pontuacao ){
      return 1;
    }
    if ( a.pontuacao > b.pontuacao ){
      return -1;
    }
    
    return 0;
}

export class CriaMatricula {
    constructor(private matriculasRepository : MatriculasRepository){
        
    }

    async executar({
        aluno,
        disciplina
    }: CriaMatriculaRequest): Promise<CriaMatriculaResponse>{
        const matriculaDuplicada = await this.matriculasRepository.encontraMatriculaDuplicada(
            aluno,
            disciplina
        )

        if(matriculaDuplicada){
            throw new Error('Essa matrícula já foi realizada');
        }

        const matricula = new Matricula({
            aluno,
            disciplina
        })

        // Add regras de negócio

        await this.matriculasRepository.create(matricula)

        return matricula
    }

    async calcularColocacaoAluno(aluno: Aluno, disciplina: Disciplina){
        // Lista de todos alunos matriculados na disciplina
        const matriculasDisciplina = await this.matriculasRepository.listarAlunosMatriculadosDisciplina(disciplina);
        
        if(matriculasDisciplina){
            //Calcular a pontuação de todos os alunos matriculados
            var pontuacaoAlunos = new Array<PontuacaoMatricula>;

            matriculasDisciplina.forEach(element => {
                var pontuacaoAluno = element.aluno.cr;
                // Finalista na verdade é quem cursa TCC II, mas nesse caso foi considerado em está no último período
                if(element.aluno.periodo_atual == 10){ 
                    pontuacaoAluno += 20;
                // Aluno Periodizado
                }else if(element.aluno.periodo_atual == element.disciplina.disciplina_base.periodo){
                    pontuacaoAluno += 10;
                }
                const pontuacao : PontuacaoMatricula = {
                    id_aluno : element.aluno.matricula,
                    pontuacao : pontuacaoAluno    
                }
                pontuacaoAlunos.push(pontuacao);
            });

            // Ordenar por pontuação e retornar a posição do aluno
            pontuacaoAlunos.sort(compararPontuacao);
            const posAluno = pontuacaoAlunos.findIndex((element) => element.id_aluno == aluno.matricula) + 1;

            if(posAluno >= 0){
                return [posAluno, disciplina.semestre_info.vagas];
            } else {
                throw new Error('Aluno não matriculado nessa disciplina');
            }
            
        }

    }
}