import { json } from 'body-parser'
import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
const PORT = 5000

const app: Express = express()

app.use(bodyParser.json({ limit: "500kb" }))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.get('/hi', (req: Request, res: Response) => {
    res.send('Hi')
})

app.listen(PORT, ()=>{
    console.log(`Started server on port ${PORT}`)
})