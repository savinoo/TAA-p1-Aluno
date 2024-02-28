import { makeAlunoBD } from "../factories/make-aluno";
import { makeDisciplinaUseCase } from "../factories/make-disciplina";
import { makeMatriculaUseCase } from "../factories/make-matricula";
import { Request, Response } from "express";
   
class DisciplinaController{
    async consultaDisciplinas(req: Request , res: Response): Promise<void> {
        const aluno_bd = makeAlunoBD();
        const disciplina_uc = makeDisciplinaUseCase();
    
        const {id_aluno} = req.body;
        const {ano} = req.body;
        const {semestre} = req.body;

        var sucesso = false;
    
        const aluno = await aluno_bd.encontraAlunoPorMatricula(id_aluno);
        if(aluno){
            if(!(aluno instanceof Error)){
                const disciplinas = await disciplina_uc.ConsultarDisciplinasDisponiveis(aluno);
                if(disciplinas){
                    res.status(200).json({
                        aluno_id: id_aluno,
                        semestre_letivo: ano + '.'+ semestre,
                        lista_disciplinas: disciplinas,
                        status: 'sucesso'
                    }).end();    
                    sucesso = true;    
                }
            }
        }
        
        if(!sucesso){
            res.status(200).json({
                aluno_id: id_aluno,
                semestre_letivo: ano + '.'+ semestre,
                lista_disciplinas: '',
                status: 'falhou'
            }).end();
        }
    }

}

export {DisciplinaController}