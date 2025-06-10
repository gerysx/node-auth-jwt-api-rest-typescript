import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes'

const app = express();

// MIDDLEWARE PARA QUE EXPRESS LEA FORMATOS JSON
app.use(express.json())

// ROUTES
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
//HACER UNA API PARA USUARIOS
//AUTENTICACIÓN
//USUARIOS



export default app
