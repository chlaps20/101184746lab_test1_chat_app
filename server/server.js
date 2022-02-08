const express = require('express')
const dotenv = require("dotenv")
const {chats} = require('./data/data')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')

const app = express()
dotenv.config();
connectDB()
app.use(express.json());

app.get("/",(req,res)=> {
    res.send("Api is running")
})

app.get('/api/chat',(req,res)=> {
    res.send(chats)
})

app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server Started on ${PORT}`))