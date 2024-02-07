import { DisciplinasRepository } from '../../repositorios/disciplinas-repository';
import { Aluno } from '../../types/aluno';
import { Disciplina, compararDisciplina } from '../../types/disciplina';

export class ConsultarDisciplina {
    disciplinaRepo: DisciplinasRepository;
    constructor(private disciplinasRepository : DisciplinasRepository){
        this.disciplinaRepo = disciplinasRepository;
    }

    async ConsultarDisciplinasDisponiveis(aluno: Aluno) : Promise <Disciplina[]>{
        if(!aluno){
            throw new Error('Aluno inválido');
        }

        var listaDisciplinas = await this.disciplinaRepo.listaTodasDisciplinas();
        
        var disciplinasCursadas = aluno.disciplinas_cursadas;

        var disciplinas_disponiveis = new Array<Disciplina>;
        
        if(listaDisciplinas){
            // Disciplinas nao cursadas ainda
            var disciplinas_nao_cursadas = new Array<Disciplina>;
            listaDisciplinas.forEach(element => {
                if(!disciplinasCursadas.includes(element.disciplina_base.id)){
                    disciplinas_nao_cursadas.push({... element})
                }

            });

            // Disciplinas disponiveis para o aluno
            if(disciplinasCursadas.length > 0){
                disciplinas_nao_cursadas.forEach(element => {
                    var pre_requisitos = element.disciplina_base.pre_requisito;
                    var disponivel = true;
                    if(pre_requisitos.length > 0){
                        pre_requisitos.forEach(id => {
                            if(!disciplinasCursadas.includes(id)){
                                disponivel = false;
                            }
                        })
                    }
                    if(disponivel){
                        disciplinas_disponiveis.push({... element});
                    }
                    disponivel = true;
                });
            } else {
                disciplinas_nao_cursadas.forEach(element => {
                    var pre_requisitos = element.disciplina_base.pre_requisito;
                    var disponivel = true;
                    if(pre_requisitos.length != 0){
                        disponivel = false;
                    }
                    if(disponivel){
                        disciplinas_disponiveis.push({... element});
                    }
                    disponivel = true;
                });
            }
        }

        return disciplinas_disponiveis.sort(compararDisciplina);
    }
}