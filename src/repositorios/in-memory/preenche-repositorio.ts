import { InMemoryDisciplinasRepository } from "./in-memory-disciplina-repository"
import { InMemoryMatriculasRepository } from "./in-memory-matriculas-repository"
import { Disciplina } from "../../types/disciplina";
import { Disciplina_base } from "../../types/disciplina";
import { SemestreInfo } from "../../types/semestre";

export function PreencheBD(bd){
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
    if (bd instanceof InMemoryMatriculasRepository){
        const matricula_bd = bd as InMemoryMatriculasRepository;

    }
}