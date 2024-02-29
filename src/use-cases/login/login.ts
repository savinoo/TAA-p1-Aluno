import { generateToken, verifyToken } from '../../app/middleware/jwt-validation';
import { InMemoryAlunosRepository } from '../../repositorios/in-memory/in-memory-alunos-repository'

const alunos = [
    { matricula: 'aluno1', pass: 'senha1' },
    { matricula: 'aluno2', pass: 'senha2' }
];

export function login_(matricula: string, pass: string){
    const aluno = alunos.find((aluno) => aluno.matricula === matricula);

    if(!aluno) {
        return null
    }

    if(aluno.pass !== pass) {
        return null
    }

    const token = generateToken({matricula, pass})
    return token
}