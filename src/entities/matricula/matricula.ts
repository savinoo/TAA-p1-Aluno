import { Aluno } from '../../types/aluno';
import { Disciplina_base } from '../../types/disciplina';
import {SemestreInfo} from '../../types/semestre'
import { Disciplina } from '../../types/disciplina';

export interface MatriculaProps{
    aluno: Aluno;
    disciplina: Disciplina;
}

export class Matricula{
    private props: MatriculaProps;

    get aluno(){
        return this.props.aluno;
    }

    get disciplina(){
        return this.props.disciplina;
    }

    constructor(props: MatriculaProps){
       /* this.periodo = {ano: new Date().getFullYear(),
        semestre: new Date().getMonth() <= 6 ? 1: 2};*/
        
        const {semestre_info} = props.disciplina;

        if(semestre_info.ano > new Date().getFullYear() || 
        (semestre_info.ano == new Date().getFullYear() &&
        (new Date().getMonth() <= 6 && semestre_info.semestre==2))){
            throw new Error('Data inválida');
        }

        if(semestre_info.semestre > 2 || semestre_info.semestre < 1){
            throw new Error('Semestre inválido')
        }
        

        this.props = props;
    }
}