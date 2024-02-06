import {describe, it, expect,  afterAll, vi } from 'vitest';
import { InMemoryDisciplinasRepository } from "../../repositorios/in-memory/in-memory-disciplina-repository";
import { Aluno } from "../../types/aluno";
import { Disciplina, compararDisciplina } from '../../types/disciplina';
import { ConsultarDisciplina } from './disciplinas-consulta';


describe('Consultar disciplinas disponíveis', () => {
    it('deve ser possível consultar as disciplinas disponíveis, excluindo as que já foram cursadas', () => {

        const consoleMock = vi.spyOn(console, 'log')

        const aluno01 : Aluno = {
            nome: 'Joao', 
            matricula: 'M0001',
            data_ingresso: '24-04-2018',
            curso: 'Engenharia da Computação',
            periodo_atual: 5,
            disciplinas_cursadas: ['D0001', 'D0002'],
            cr: 7.3        
        }
        
        const aluno02 : Aluno = {
            nome: 'Pedro', 
            matricula: 'M0002',
            data_ingresso: '24-04-2024',
            curso: 'Engenharia da Computação',
            periodo_atual: 1,
            disciplinas_cursadas: [],
            cr: 0       
        }

        const consulta_disciplina = new ConsultarDisciplina(disciplinaRepo);
        const disciplinas_disponiveis01 = consulta_disciplina.ConsultarDisciplinasDisponiveis(aluno01);
        const disciplinas_disponiveis02 = consulta_disciplina.ConsultarDisciplinasDisponiveis(aluno02);

        expect(disciplinas_disponiveis01).resolves.toEqual([disciplina03, disciplina05].sort(compararDisciplina));
        expect(disciplinas_disponiveis02).resolves.toEqual([disciplina05, disciplina04, disciplina03, disciplina02, disciplina01].sort(compararDisciplina));

    })
    /*
    *   TEST SETUP
    *
    */
    const disciplina01 : Disciplina = {
        id: 'D0001',
        nome: 'Calculo I',
        carga_horaria: 240,
        pre_requisito: [],
        professor: '',
        horario: '',
        sala: '',
        vagas: 5,
        periodo: 1 
    }
    
    const disciplina02 : Disciplina = {
        id: 'D0002',
        nome: 'Geometria Analítica',
        carga_horaria: 240,
        pre_requisito: [],
        professor: '',
        horario: '',
        sala: '',
        vagas: 0,
        periodo: 1 
    }
    
    const disciplina03 : Disciplina = {
        id: 'D0003',
        nome: 'Física I',
        carga_horaria: 240,
        pre_requisito: [],
        professor: '',
        horario: '',
        sala: '',
        vagas: 2,
        periodo: 1 
    }
    
    const disciplina04 : Disciplina = {
        id: 'D0004',
        nome: 'Física II',
        carga_horaria: 240,
        pre_requisito: ['D0003'],
        professor: '',
        horario: '',
        sala: '',
        vagas: 3,
        periodo: 2 
    }
    
    const disciplina05 : Disciplina = {
        id: 'D0005',
        nome: 'Cálculo II',
        carga_horaria: 240,
        pre_requisito: ['D0001', 'D0002'],
        professor: '',
        horario: '',
        sala: '',
        vagas: 1,
        periodo: 2 
    }
    
    const disciplinaRepo = new InMemoryDisciplinasRepository();
    disciplinaRepo.create(disciplina01);
    disciplinaRepo.create(disciplina02);
    disciplinaRepo.create(disciplina03);
    disciplinaRepo.create(disciplina04);
    disciplinaRepo.create(disciplina05);

})