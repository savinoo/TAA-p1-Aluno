import { InMemoryMatriculasRepository } from "../../repositorios/in-memory/in-memory-matriculas-repository";
import { CriaMatricula } from "../../use-cases/matricula/criar-matricula";

export function makeMatriculaUseCase(){
    const bd = new InMemoryMatriculasRepository();
    const matriculaUseCase = new CriaMatricula(bd);
    return matriculaUseCase;
}