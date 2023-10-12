import express from 'express'

const router = express.Router()

/* Esto lo puse como punto de partida, no hay que tomar lo
   de dentro de la funciones en serio */

router.post('/SignIn', async (req, res) => {
  const body = await req.body
  console.log(body)
  res.send({username: body.username, pwd: body.pwd})
})

router.post('/Register', async (req, res) => {
  res.sendStatus(200)
})

export default router
