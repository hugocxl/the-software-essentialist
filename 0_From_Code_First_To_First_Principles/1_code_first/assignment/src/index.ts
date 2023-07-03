// Dependencies
import express from 'express'

// Routers
import { userRouter } from './routers'

const app = express()
const port = 8000

async function startServer() {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use('/users', userRouter)

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

startServer()
