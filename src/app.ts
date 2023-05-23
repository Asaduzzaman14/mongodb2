import express, { Application } from 'express'
import cors from 'cors'


// Application Routes
import userRoutes from './app/module/book/book.route'

const app: Application = express()
app.use(cors()) // using cors

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.use('/api/v1/book', userRoutes)

export default app;