import { InMemoryDisciplinasRepository } from "../../repositorios/in-memory/in-memory-disciplina-repository";
import { PreencheBD } from "../../repositorios/in-memory/preenche-repositorio";
import { ConsultarDisciplina } from "../../use-cases/disciplinas/disciplinas-consulta";

export function makeDisciplinaUseCase(){
    const bd = new InMemoryDisciplinasRepository();
    if(bd.items.length == 0){
        PreencheBD(bd);
    }
    const disciplinaConsultaUseCase = new ConsultarDisciplina(bd);
    return disciplinaConsultaUseCase;
}