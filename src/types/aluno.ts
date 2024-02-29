export type Aluno = {
    matricula: string;
    nome: string;
    data_ingresso: string;
    curso: string;
    periodo_atual: number;  
    disciplinas_cursadas: Array<string>;
    cr: number;
    pass: string;
}