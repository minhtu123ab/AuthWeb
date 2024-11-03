import { NextFunction, Request, Response } from 'express'
import userModel from '~/models/userModel'

const userMiddleware = {
  registerUser: async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, confirmPassword } = req.body
    if (!name || !email || !password || !confirmPassword) {
      res.status(400).json({ message: 'All fields are required' })
      return
    }
    if (password !== confirmPassword) {
      res.status(400).json({ message: 'Passwords do not match' })
      return
    }
    const user = await userModel.findOne({ email })
    if (user) {
      res.status(400).json({ message: 'Email already exists' })
      return
    }
    next()
  },
  loginUser: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({ message: 'All fields are required' })
      return
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      res.status(400).json({ message: 'Invalid email or password' })
      return
    }
    next()
  }
}

export default userMiddleware
