import {Semestre} from '../../types/semestre'

export interface MatriculaProps{
    aluno: string;
    disciplina: string;
    periodo: Semestre;
    professor: string;
}

export class Matricula{
    private props: MatriculaProps;

    get aluno(){
        return this.props.aluno;
    }

    get disciplina(){
        return this.props.disciplina;
    }

    get periodo(){
        return this.props.periodo;
    }

    set periodo(semestre: Semestre){
        this.periodo = semestre;
    }

    get professor(){
        return this.props.professor;
    }

    constructor(props: MatriculaProps){
       /* this.periodo = {ano: new Date().getFullYear(),
        semestre: new Date().getMonth() <= 6 ? 1: 2};*/

        const {periodo} = props

        if(periodo.ano > new Date().getFullYear() || 
        (periodo.ano == new Date().getFullYear() &&
        (new Date().getMonth() <= 6 && periodo.semestre==2))){
            throw new Error('Data inválida');
        }

        if(periodo.semestre > 2 || periodo.semestre < 1){
            throw new Error('Semestre inválido')
        }

        this.props = props;
    }
}