import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import todasAsMaterias from "./todasAsMaterias";
import todosOsProfessores from "./todosOsProfessores";

const routes = Router()
const prisma = new PrismaClient()

// rota para listar todas as materias
routes.get('/listar-todas-as-materias', async (req, res) => {
  const materias = await prisma.materia.findMany()
  return res.json(materias)
})

//rota para cadastrar várias materias
routes.post('/cadastrar-varias-materias', async (req, res) => {
  const allMat = todasAsMaterias

  if(!allMat.length) {
    return res.json({message: "Não há matérias para serem cadastradas!"})
  }

  await prisma.materia.createMany({
    data: todasAsMaterias,
  })

  return res.json({message: 'Cadastro de matérias realizado com sucesso!'})
})



// rota para listar todos os professores 
routes.get('/listar-todos-professores', async (req, res) => {
  const professores = await prisma.professor.findMany() 
  return res.json(professores)
})

//rota para cadastrar vários professores
routes.post('/cadastrar-varios-professores', async (req, res) => {
  const allProfessores = todosOsProfessores 

  if(!allProfessores.length) {
    return res.json({message: "Não há professores para serem cadastrados!"})
  }

  await prisma.professor.createMany({ 
    data: todosOsProfessores,
  })

  return res.json({message: 'Cadastro de professores realizado com sucesso!'})
})

export default routes;
