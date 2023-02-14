import express from 'express'
import { Router, Request, Response } from 'express'

const app = express()
const port = 3333

const route = Router()

app.use(express.json())

route.get('/', async (req: Request, res: Response) => {
  console.log('start') 
  const delay: number = +(req.query.delay ?? 0) * 1000
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log('end ' + delay + 'ms')
  res.json({ message: 'hello world with Typescript after ' + delay + 'ms' })
})

app.use(route)


app.listen(port, () => console.log(`server running on port ${port}`))