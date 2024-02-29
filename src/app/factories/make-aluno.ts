import { InMemoryAlunosRepository } from "../../repositorios/in-memory/in-memory-alunos-repository";
import { PreencheBD } from "../../repositorios/in-memory/preenche-repositorio";

export function makeAlunoBD(){
    const alunoBD = InMemoryAlunosRepository.getInstanceBD();
    if(alunoBD.items.length == 0){
        PreencheBD(alunoBD);
    }
    return alunoBD;
}