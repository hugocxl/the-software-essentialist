// Dependencies
import express from 'express'

// Controllers
import { UserController } from '../controllers'

const userController = new UserController()
const router = express.Router()

router.get('/', async (req, res) => {
  const { email } = req.query

  try {
    const user = await userController.getUserByEmail(email as string)
    return res.status(200).json(user)
  } catch (error: any) {
    return res.status(500).json(error.message)
  }
})

router.post('/new', async (req, res) => {
  try {
    const user = await userController.createUser(req.body)

    return res.status(200).json(user)
  } catch (error: any) {
    return res.status(500).json(error.message)
  }
})

router.post('/edit/:userId', async (req, res) => {
  const { userId } = req.params
  const { firstName, lastName, email } = req.body

  try {
    const user = await userController.editUser(Number(userId), {
      email,
      firstName,
      lastName,
    })

    return res.status(200).json(user)
  } catch (error: any) {
    return res.status(500).json(error.message)
  }
})

export { router as userRouter }
