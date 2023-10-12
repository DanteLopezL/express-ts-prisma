import express from 'express'
import LoginRouter from './roots/login'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (_req, res) => {
  res.send("Hello I'm the server")
})

app.use('/api/login',  LoginRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
}) 
