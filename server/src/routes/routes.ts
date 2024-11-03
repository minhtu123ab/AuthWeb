import express from 'express'
import userController from '~/controllers/userController'
import userMiddleware from '~/middlewares/userMiddleware'

const router = express.Router()

router.post('/auth/register', userMiddleware.registerUser, userController.registerUser)

router.post('/auth/login', userMiddleware.loginUser, userController.loginUser)

export default router
