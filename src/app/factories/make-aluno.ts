import { InMemoryAlunosRepository } from "../../repositorios/in-memory/in-memory-alunos-repository";
import { PreencheBD } from "../../repositorios/in-memory/preenche-repositorio";

export function makeAlunoBD(){
    const alunoBD = new InMemoryAlunosRepository();
    PreencheBD(alunoBD);
    return alunoBD;
}