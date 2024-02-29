import { InMemoryDisciplinasRepository } from "./in-memory-disciplina-repository"
import { Disciplina } from "../../types/disciplina";
import { Disciplina_base } from "../../types/disciplina";
import { SemestreInfo } from "../../types/semestre";
import { InMemoryAlunosRepository } from "./in-memory-alunos-repository";
import { Aluno } from "../../types/aluno";

export function PreencheBD(bd: any){
    if(bd instanceof InMemoryDisciplinasRepository){
        const disciplina_bd = bd as InMemoryDisciplinasRepository;

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
        
        disciplina_bd.create(disciplina01);
        disciplina_bd.create(disciplina02);
        disciplina_bd.create(disciplina03);
        disciplina_bd.create(disciplina04);
        disciplina_bd.create(disciplina05);

    } else 
    if (bd instanceof InMemoryAlunosRepository){
        const aluno_bd = bd as InMemoryAlunosRepository;

        const aluno01 : Aluno = {
            matricula: 'M0001',
            nome: 'Valmir',
            data_ingresso: '',
            curso: 'Engenharia da Computação',
            periodo_atual: 2,
            disciplinas_cursadas: ['D0003'],
            cr: 9.0,
            pass:""
       }
    
       const aluno02 : Aluno = {
            matricula: 'M0002',
            nome: 'Lucas',
            data_ingresso: '',
            curso: 'Engenharia da Computação',
            periodo_atual: 4,
            disciplinas_cursadas: ['D0001', 'D0002'],
            cr: 7.5,
            pass:""
        }
    
        const aluno03 : Aluno = {
            matricula: 'M0003',
            nome: 'Joao',
            data_ingresso: '',
            curso: 'Engenharia da Computação',
            periodo_atual: 10,
            disciplinas_cursadas: ['D0001', 'D0002', 'D0003', 'D0004'],
            cr: 6.0,
            pass:""
        }

        const aluno04 : Aluno = {
            matricula: 'M0004',
            nome: 'Maria',
            data_ingresso: '',
            curso: 'Engenharia da Computação',
            periodo_atual: 6,
            disciplinas_cursadas: ['D0002', 'D0003', 'D0004'],
            cr: 4.0,
            pass:""
        }

        const aluno05 : Aluno = {
            matricula: 'M0005',
            nome: 'Carla',
            data_ingresso: '',
            curso: 'Engenharia da Computação',
            periodo_atual: 8,
            disciplinas_cursadas: ['D0001', 'D0002', 'D0003'],
            cr: 9.0,
            pass:""
        }

        aluno_bd.create(aluno01);
        aluno_bd.create(aluno02);
        aluno_bd.create(aluno03);
        aluno_bd.create(aluno04);
        aluno_bd.create(aluno05);

    }
}