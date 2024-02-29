import { Matricula } from '../src/entities/matricula/matricula'
import { Aluno } from '../src/types/aluno'
import { SemestreInfo } from '../src/types/semestre'
import { Disciplina, Disciplina_base } from '../src/types/disciplina';

describe('Testes para criação de matricula', () => {
    test('cria uma matricula', () => {
        const matricula = new Matricula({
            aluno: aluno01,
            disciplina: disciplina01
        })
    
        expect(matricula).toBeInstanceOf(Matricula);
        expect(matricula.aluno.nome).toEqual('Lucas');
    })
    
    test('não é possível se matricular em um periodo posterior à data atual', () => {
        
        expect(() => {
            return new Matricula({
                aluno: aluno01,
                disciplina: disciplina02
            })
        }).toThrow()
    })

    test('não é possível registrar um semestre superior ao nº 2', () => {

        expect(() => {
            return new Matricula({
                aluno: aluno01,
                disciplina: disciplina03
            })
        }).toThrow()
    })
    /*
    *   TEST SETUP
    *
    */
   const aluno01 : Aluno = {
        matricula: 'M0002',
        nome: 'Lucas',
        data_ingresso: '',
        curso: 'Engenharia da Computação',
        periodo_atual: 5,
        disciplinas_cursadas: [],
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

    const semestre_info02 : SemestreInfo = {
        ano: 2025,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }

    const semestre_info03 : SemestreInfo = {
        ano: 2024,
        semestre: 3,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }
    
    const disciplina01 : Disciplina = {
        disciplina_base :  disciplina_base01,
        semestre_info : semestre_info01
    }

    const disciplina02 : Disciplina = {
        disciplina_base :  disciplina_base01,
        semestre_info : semestre_info02
    }

    const disciplina03 : Disciplina = {
        disciplina_base :  disciplina_base01,
        semestre_info : semestre_info03
    }

})

    
