import { makeAlunoBD } from "../factories/make-aluno";
import { makeDisciplinaUseCase } from "../factories/make-disciplina";
import { makeMatriculaUseCase } from "../factories/make-matricula";
import { Request, Response } from "express";

class MatriculaController {
    async matricularAluno(req: Request, res: Response): Promise<void> {
        const aluno_bd = makeAlunoBD();
        const disciplina_uc = makeDisciplinaUseCase();
        const matricula_uc = makeMatriculaUseCase();

        const { id_aluno } = req.body;
        const { id_disciplina } = req.body;
        const { ano } = req.body;
        const { semestre } = req.body;

        var sucesso = false;
        var er_message = "falhou";

        const aluno = await aluno_bd.encontraAlunoPorMatricula(id_aluno);
        const disciplina = await disciplina_uc.disciplinaRepo.buscaDisciplina(id_disciplina, ano as number, semestre as number);
        if (disciplina && aluno) {
            if (!(aluno instanceof Error)) {
                const matricula = await matricula_uc.executar({ aluno, disciplina });
                if (matricula) {
                    if (matricula instanceof Error) {
                        er_message = matricula.message
                    } else {
                        const classificacao = await matricula_uc.calcularColocacaoAluno(aluno, disciplina);
                        if (classificacao) {
                            if (!(classificacao instanceof Error)) {
                                res.status(200).json({
                                    aluno_id: id_aluno,
                                    disciplina_id: id_disciplina,
                                    semestre_letivo: ano + '.' + semestre,
                                    quant_vagas: classificacao[1],
                                    colocacao_atual: classificacao[0],
                                    status: 'sucesso'
                                }).end();
                                sucesso = true;
                            }
                        }
                    }
                }
            }
        }
        if (!sucesso) {
            res.status(200).json({
                aluno_id: id_aluno,
                disciplina_id: id_disciplina,
                semestre_letivo: ano + '.' + semestre,
                quant_vagas: '',
                colocacao_atual: '',
                status: er_message
            }).end();
        }

    }

}

export { MatriculaController }