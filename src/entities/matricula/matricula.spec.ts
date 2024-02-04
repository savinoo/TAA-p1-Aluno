import { expect, test, describe } from 'vitest'
import { Matricula } from './matricula'

describe('Testes para criação de matricula', () => {
    test('cria uma matricula', () => {
        const matricula = new Matricula({
            aluno: 'Lucas',
            disciplina: 'Testes Automatizados',
            periodo: {ano: 2024, semestre: 1},
            professor: "Fernando Carvalho"
        })
    
        expect(matricula).toBeInstanceOf(Matricula);
        expect(matricula.aluno).toEqual('Lucas');
    })
    
    test('não é possível se matricular em um periodo posterior à data atual', () => {
        const periodo = {ano: 2025, semestre: 2};
        
        expect(() => {
            return new Matricula({
                aluno: 'Valmir',
                disciplina: 'Testes Automatizados',
                periodo,
                professor: "Fernando Carvalho"
            })
        }).toThrow()
    })

    test('não é possível registrar um semestre superior ao nº 2', () => {
        const periodo = {ano: 2023, semestre: 3};

        expect(() => {
            return new Matricula({
                aluno: 'Joao',
                disciplina: 'Testes Automatizados',
                periodo,
                professor: "Fernando Carvalho"
            })
        }).toThrow()
    })
})

    
