import {describe, it, expect} from 'vitest';
import { CriaMatricula } from './criar-matricula';
import { Matricula } from '../../entities/matricula/matricula';
import { InMemoryMatriculasRepository } from '../../repositorios/in-memory/in-memory-matriculas-repository';
import { Aluno } from '../../types/aluno';
import { Disciplina, Disciplina_base } from '../../types/disciplina';
import { SemestreInfo } from '../../types/semestre';

describe('criar matricula', () => {
    it('deve ser possível criar uma matricula', () => {

        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        expect(criaMatricula.executar({
            aluno : aluno01, 
            disciplina: disciplina01
        })).resolves.toBeInstanceOf(Matricula)

        expect(criaMatricula.executar({
            aluno : aluno02, 
            disciplina: disciplina01
        })).resolves.toBeInstanceOf(Matricula)
    })

    it('não deve ser possivel criar uma matricula duplicada', async () => {
        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        await criaMatricula.executar({
            aluno : aluno01, 
            disciplina: disciplina01
        })

        expect(criaMatricula.executar({
            aluno : aluno01, 
            disciplina: disciplina01
        })).rejects.toBeInstanceOf(Error)

    })

    /*
    *   TEST SETUP
    *
    */
   const aluno01 : Aluno = {
        matricula: 'M0001',
        nome: 'Valmir',
        data_ingresso: '',
        curso: 'Engenharia da Computação',
        periodo_atual: 1,
        disciplinas_cursadas: [],
        cr: 0.0
   }

   const aluno02 : Aluno = {
        matricula: 'M0002',
        nome: 'Lucas',
        data_ingresso: '',
        curso: 'Engenharia da Computação',
        periodo_atual: 3,
        disciplinas_cursadas: ['D0001', 'D0002'],
        cr: 7.5
    }

   const disciplina_base01 : Disciplina_base = {
        id: 'D0001',
        nome: 'Calculo I',
        carga_horaria: 240,
        pre_requisito: [],
        periodo: 1 
    }

    const semestre_info01 : SemestreInfo = {
        ano: 2024,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }
    
    const disciplina01 : Disciplina = {
        disciplina_base :  disciplina_base01,
        semestre_info : semestre_info01
    }
   
})

describe('Matricular e Consultar Classificação', () => {
    it('deve ser possível criar uma matricula e consultar a classificação do aluno (Apenas um aluno)', async () => {

        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        await criaMatricula.executar({
            aluno : aluno01, 
            disciplina: disciplina01
        })

        expect(criaMatricula.calcularColocacaoAluno(aluno01, disciplina01)).resolves.toEqual([1,2]);
    })

    it('deve ser possível criar uma matricula e consultar a classificação do aluno (Vários alunos)', async () => {

        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        await criaMatricula.executar({
            aluno : aluno01, 
            disciplina: disciplina01
        })

        await criaMatricula.executar({
            aluno : aluno02, 
            disciplina: disciplina01
        })

        await criaMatricula.executar({
            aluno : aluno03, 
            disciplina: disciplina01
        })

        expect(criaMatricula.calcularColocacaoAluno(aluno01, disciplina01)).resolves.toEqual([3,2]);
        expect(criaMatricula.calcularColocacaoAluno(aluno02, disciplina01)).resolves.toEqual([2,2]);
        expect(criaMatricula.calcularColocacaoAluno(aluno03, disciplina01)).resolves.toEqual([1,2]);
    })

    it('Não deve ser possível consultar a classificação de um aluno não matriculado na disciplina', async () => {

        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        await criaMatricula.executar({
            aluno : aluno01, 
            disciplina: disciplina01
        })

        expect(criaMatricula.calcularColocacaoAluno(aluno02, disciplina01)).resolves.toThrow;
    })

    /*
    *   TEST SETUP
    *
    */
   const aluno01 : Aluno = {
        matricula: 'M0001',
        nome: 'Valmir',
        data_ingresso: '',
        curso: 'Engenharia da Computação',
        periodo_atual: 1,
        disciplinas_cursadas: [],
        cr: 0.0
   }

   const aluno02 : Aluno = {
        matricula: 'M0002',
        nome: 'Lucas',
        data_ingresso: '',
        curso: 'Engenharia da Computação',
        periodo_atual: 3,
        disciplinas_cursadas: ['D0001', 'D0002'],
        cr: 7.5
    }

    const aluno03 : Aluno = {
        matricula: 'M0003',
        nome: 'Joao',
        data_ingresso: '',
        curso: 'Engenharia da Computação',
        periodo_atual: 10,
        disciplinas_cursadas: ['D0001', 'D0002'],
        cr: 6.0
    }

   const disciplina_base01 : Disciplina_base = {
        id: 'D0003',
        nome: 'Calculo III',
        carga_horaria: 240,
        pre_requisito: [],
        periodo: 3 
    }

    const semestre_info01 : SemestreInfo = {
        ano: 2024,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 2
    }
    
    const disciplina01 : Disciplina = {
        disciplina_base :  disciplina_base01,
        semestre_info : semestre_info01
    }
   
})