import express, { Request, Response } from 'express'
import router from './routes/routes'
import 'dotenv/config'
import connectDB from './configs/connectDB'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

connectDB()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
