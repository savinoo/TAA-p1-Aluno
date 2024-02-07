import { SemestreInfo } from "./semestre";

export type Disciplina_base = {
    id: string;
    nome: string;
    carga_horaria: number;
    pre_requisito: Array<string>;
    periodo: number;  
}

export type Disciplina = {
    disciplina_base: Disciplina_base;
    semestre_info: SemestreInfo;
}

export function compararDisciplina( a : Disciplina, b : Disciplina ) {
    if ( a.disciplina_base.periodo < b.disciplina_base.periodo ){
      return -1;
    }
    if ( a.disciplina_base.periodo > b.disciplina_base.periodo ){
      return 1;
    }
    
    return a.disciplina_base.nome.localeCompare(b.disciplina_base.nome);
}