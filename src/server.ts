import express from 'express'
import { Router, Request, Response } from 'express'

const app = express()
const port = 3333

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(port, () => `server running on port ${port}`)