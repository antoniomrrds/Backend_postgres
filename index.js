const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json());
app.listen(4001 , ()=> console.log("Servidor On"))