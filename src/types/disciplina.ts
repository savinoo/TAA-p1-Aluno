export type Disciplina = {
    id: string;
    nome: string;
    carga_horaria: number;
    pre_requisito: Array<string>;
    professor: string;
    horario: string;
    sala: string;
    vagas: number;
    periodo: number;  
}

export function compararDisciplina( a : Disciplina, b : Disciplina ) {
    if ( a.periodo < b.periodo ){
      return -1;
    }
    if ( a.periodo > b.periodo ){
      return 1;
    }
    
    return a.nome.localeCompare(b.nome);
}