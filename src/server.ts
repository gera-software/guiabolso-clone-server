import express from 'express'
import { Router, Request, Response } from 'express'
import hello from './folder/hello'

const app = express()
const port = 3333

const route = Router()

app.use(express.json())

route.get('/', async (req: Request, res: Response) => {
  const result = await hello(+(req.query.delay ?? 0))
  res.json(result)
})

app.use(route)


app.listen(port, () => console.log(`server running on port ${port}`))