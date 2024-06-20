// Requirements
const express = require('express');
const cors = require('cors');
const  mongoose = require('mongoose');
require('dotenv').config();
const server = express();
const authRoute = require('./routes/authRoute')
const PORT = process.env.PORT

// Middlewares
server.use(cors());
server.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URL)

// Server connection
server.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})

// Routes
server.use('/', authRoute)