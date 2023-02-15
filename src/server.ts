import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
import { Router, Request, Response } from 'express'
import hello from './api/hello'
import pluggy from './api/pluggy'
import getInstitutions from './api/getInstitutions'
import syncTransactions from './api/syncTransactions'

const app = express()
const port = 3333

const route = Router()

app.use(express.json())

route.get('/', async (req: Request, res: Response) => {
  const result = await hello(+(req.query.delay ?? 0))
  res.json(result)
})

route.get('/accounts', async (req: Request, res: Response) => {
  const result = await pluggy(req.query.itemId as string)
  res.json(result)
})

route.get('/institutions', async (req: Request, res: Response) => {
  const result = await getInstitutions()
  res.json(result)
})

route.post('/sync', syncTransactions)

app.use(route)


app.listen(port, () => console.log(`server running on port ${port}`))