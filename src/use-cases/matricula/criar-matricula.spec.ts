import {describe, it, expect} from 'vitest';
import { CriaMatricula } from './criar-matricula';
import { Matricula } from '../../entities/matricula/matricula';
import { InMemoryMatriculasRepository } from '../../repositorios/in-memory/in-memory-matriculas-repository';

describe('criar matricula', () => {
    it('deve ser possível criar uma matricula', () => {

        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        expect(criaMatricula.executar({
            aluno:"Valmir Monteiro",
            disciplina:"Engenharia de Software",
            periodo: {ano: 2023, semestre: 2},
            professor:"Luiz Gustavo"
        })).resolves.toBeInstanceOf(Matricula)

        expect(criaMatricula.executar({
            aluno:"Valmir Monteiro",
            disciplina:"Engenharia de Software",
            periodo: {ano: 2023, semestre: 1},
            professor:"Luiz Gustavo"
        })).resolves.toBeInstanceOf(Matricula)
    })

    it('não deve ser possivel criar uma matricula duplicada', async () => {
        const matriculasRepository = new InMemoryMatriculasRepository();
        const criaMatricula = new CriaMatricula(matriculasRepository);

        await criaMatricula.executar({
            aluno:"Valmir Monteiro",
            disciplina:"Engenharia de Software",
            periodo: {ano: 2023, semestre: 2},
            professor:"Luiz Gustavo"
        })



        expect(criaMatricula.executar({
            aluno:"Valmir Monteiro",
            disciplina:"Engenharia de Software",
            periodo: {ano: 2023, semestre: 2},
            professor:"Luiz Gustavo"
        })).rejects.toBeInstanceOf(Error)

    })
})