import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/equipes', async (req, res) => {
  const equipes = await prisma.equipe.findMany()
  res.json(equipes)
})

app.post('/equipes', async (req, res) => {
  const { nome, especialidade } = req.body
  const equipe = await prisma.equipe.create({
    data: { nome, especialidade }
  })
  res.status(201).json(equipe)
})

app.put('/equipe', async (req, res) => {
  const { id, nome, especialidade } = req.body
  const equipe = await prisma.equipe.update({
    where: { id: Number(id) },
    data: { nome, especialidade }
  })
  res.json(equipe)
})

app.delete('/equipe/:id', async (req, res) => {
  const { id } = req.params
  await prisma.equipe.delete({
    where: { id: Number(id) }
  })
  res.status(204).send()
})

app.post('/desenvolvedores', async (req, res) => {
  const { nome, nivel, equipeId } = req.body
  const dev = await prisma.desenvolvedor.create({
    data: { 
      nome, 
      nivel, 
      equipeId: Number(equipeId) 
    }
  })
  res.status(201).json(dev)
})

app.get('/equipes/:id/desenvolvedores', async (req, res) => {
  const { id } = req.params
  const devs = await prisma.desenvolvedor.findMany({
    where: { equipeId: Number(id) }
  })
  res.json(devs)
})

app.put('/desenvolvedores', async (req, res) => {
  const { id, nome, nivel, equipeId } = req.body
  const dev = await prisma.desenvolvedor.update({
    where: { id: Number(id) },
    data: { 
      nome, 
      nivel, 
      equipeId: equipeId ? Number(equipeId) : undefined 
    }
  })
  res.json(dev)
})

app.delete('/desenvolvedores/:id', async (req, res) => {
  const { id } = req.params
  await prisma.desenvolvedor.delete({
    where: { id: Number(id) }
  })
  res.status(204).send()
})

app.listen(3000, () => {
  console.log('rodano')
})

///ROTAS PRONTAS HENRIQUE