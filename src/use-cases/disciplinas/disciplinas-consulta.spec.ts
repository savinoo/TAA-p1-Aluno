import {describe, it, expect,  afterAll, vi } from 'vitest';
import { InMemoryDisciplinasRepository } from "../../repositorios/in-memory/in-memory-disciplina-repository";
import { Aluno } from "../../types/aluno";
import { Disciplina, Disciplina_base, compararDisciplina } from '../../types/disciplina';
import { ConsultarDisciplina } from './disciplinas-consulta';
import { PreencheBD } from '../../repositorios/in-memory/preenche-repositorio';
import { SemestreInfo } from '../../types/semestre';

describe('Consultar disciplinas disponíveis', () => {
    it('deve mostrar as disciplinas disponíveis, excluindo as que já foram cursadas', () => {

        const aluno01 : Aluno = {
            nome: 'Joao', 
            matricula: 'M0001',
            data_ingresso: '24-04-2018',
            curso: 'Engenharia da Computação',
            periodo_atual: 5,
            disciplinas_cursadas: ['D0001', 'D0002'],
            cr: 7.3        
        }
        
        const disciplinaRepo = new InMemoryDisciplinasRepository();
        PreencheBD(disciplinaRepo);

        const consulta_disciplina = new ConsultarDisciplina(disciplinaRepo);
        const disciplinas_disponiveis01 = consulta_disciplina.ConsultarDisciplinasDisponiveis(aluno01);

        expect(disciplinas_disponiveis01).resolves.toEqual([disciplina03, disciplina05].sort(compararDisciplina));
    })

    it('deve mostrar apenas as disciplinas que não possuem pré requisitos', () => {
     
        const aluno02 : Aluno = {
            nome: 'Pedro', 
            matricula: 'M0002',
            data_ingresso: '24-04-2024',
            curso: 'Engenharia da Computação',
            periodo_atual: 1,
            disciplinas_cursadas: [],
            cr: 0       
        }

        const disciplinaRepo = new InMemoryDisciplinasRepository();
        PreencheBD(disciplinaRepo);

        const consulta_disciplina = new ConsultarDisciplina(disciplinaRepo);
        const disciplinas_disponiveis02 = consulta_disciplina.ConsultarDisciplinasDisponiveis(aluno02);

        expect(disciplinas_disponiveis02).resolves.toEqual([disciplina03, disciplina02, disciplina01].sort(compararDisciplina));

    })
    /*
    * TEST INFO SETUP
    */
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

    const disciplina_base02 : Disciplina_base = {
        id: 'D0002',
        nome: 'Geometria Analítica',
        carga_horaria: 240,
        pre_requisito: [],
        periodo: 1 
    }

    const semestre_info02 : SemestreInfo = {
        ano: 2024,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }
    
    const disciplina02 : Disciplina = {
        disciplina_base :  disciplina_base02,
        semestre_info : semestre_info02
    }

    const disciplina_base03 : Disciplina_base = {
        id: 'D0003',
        nome: 'Física I',
        carga_horaria: 240,
        pre_requisito: [],
        periodo: 1 
    }

    const semestre_info03 : SemestreInfo = {
        ano: 2024,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }
    
    const disciplina03 : Disciplina = {
        disciplina_base :  disciplina_base03,
        semestre_info : semestre_info03
    }

    const disciplina_base04 : Disciplina_base = {
        id: 'D0004',
        nome: 'Física II',
        carga_horaria: 240,
        pre_requisito: ['D0003'],
        periodo: 2 
    }

    const semestre_info04 : SemestreInfo = {
        ano: 2024,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }
    
    const disciplina04 : Disciplina = {
        disciplina_base :  disciplina_base04,
        semestre_info : semestre_info04
    }

    const disciplina_base05 : Disciplina_base = {
        id: 'D0005',
        nome: 'Cálculo II',
        carga_horaria: 240,
        pre_requisito: ['D0001', 'D0002'],
        periodo: 2 
    }

    const semestre_info05 : SemestreInfo = {
        ano: 2024,
        semestre: 1,
        professor: 'Luiz',
        horario: '',
        sala: 'E12',
        vagas: 5
    }
    
    const disciplina05 : Disciplina = {
        disciplina_base :  disciplina_base05,
        semestre_info : semestre_info05
    }  
})