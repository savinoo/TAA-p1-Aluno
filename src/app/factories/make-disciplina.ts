import { InMemoryDisciplinasRepository } from "../../repositorios/in-memory/in-memory-disciplina-repository";
import { PreencheBD } from "../../repositorios/in-memory/preenche-repositorio";
import { ConsultarDisciplina } from "../../use-cases/disciplinas/disciplinas-consulta";

export function makeDisciplinaUseCase(){
    const bd = new InMemoryDisciplinasRepository();
    PreencheBD(bd);
    const disciplinaConsultaUseCase = new ConsultarDisciplina(bd);
    return disciplinaConsultaUseCase;
}