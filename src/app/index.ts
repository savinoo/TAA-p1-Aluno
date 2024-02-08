import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { makeAlunoBD } from "./factories/make-aluno";
import { makeMatriculaUseCase } from "./factories/make-matricula";
import { Aluno } from "../types/aluno";
import { makeDisciplinaUseCase } from "./factories/make-disciplina";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json())

const aluno_bd = makeAlunoBD();
const disciplina_uc = makeDisciplinaUseCase();
const matricula_uc = makeMatriculaUseCase();

app.post('/matricula', async (req, res)=>{ 
	
	const {servico} = req.body;
  const {id_aluno} = req.body;
  const {id_disciplina} = req.body;
  const {ano} = req.body;
  const {semestre} = req.body;

  if(servico == 'matricula'){ 
      const aluno = await aluno_bd.encontraAlunoPorMatricula(id_aluno);
      const disciplina = await disciplina_uc.disciplinaRepo.buscaDisciplina(id_disciplina, ano as number, semestre as number);
      if(disciplina && aluno){
        const matricula = await matricula_uc.executar({aluno, disciplina});
        if(matricula){
          const classificacao = await matricula_uc.calcularColocacaoAluno(aluno, disciplina);
          if(classificacao){
            res.set('Content-Type', 'text/html'); 
            res.status(200).send(`<h2>A classificação do Aluno ${aluno.nome} na disciplina ${disciplina?.disciplina_base.nome} é ${classificacao[0]}° de ${classificacao[1]} vagas</h2>`); 

          }
        }
      } else {
        res.send(`Erro ao realizar a matrícula do aluno ${aluno?.nome} na disciplina ${disciplina?.disciplina_base.nome}`); 
      }
      
  }

  if(servico == 'disciplinas'){
      const aluno = await aluno_bd.encontraAlunoPorMatricula(id_aluno);
      if(aluno){
        const disciplinas = await disciplina_uc.ConsultarDisciplinasDisponiveis(aluno);
        if(disciplinas){
          var mensagem = "<h2>As disciplinas disponíveis para o Aluno " + aluno.nome +"</h2>";
          disciplinas.forEach(element => {
            mensagem += "<h3>"+element.disciplina_base.nome + "</h3>"; 
          });
          res.set('Content-Type', 'text/html'); 
          res.status(200).send(`${mensagem}`);
        }
      }
  }

}) 

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});