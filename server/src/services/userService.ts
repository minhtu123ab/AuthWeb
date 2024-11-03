import bcrypt from 'bcrypt'
import userModel from '~/models/userModel'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET as string

const userService = {
  registerUser: async (name: string, email: string, password: string) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = userModel.create({
      email,
      password: hashedPassword,
      salt,
      name: name
    })
    return newUser
  },
  loginUser: async (email: string, password: string) => {
    const user = await userModel.findOne({ email })
    if (!user) {
      throw new Error('Invalid email or password')
    }
    const checkPassword = await bcrypt.hash(password, user.salt)
    if (checkPassword !== user.password) {
      throw new Error('Invalid email or password')
    }

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, {
      expiresIn: '1h'
    })
    return token
  }
}

export default userService
