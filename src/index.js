const express = require('express')
const clientRouter = require('./routes/clientRoutes')
const cors = require("cors")

const app = express()
app.use(cors());
app.use(express.json());
app.use('/client',clientRouter)

app.listen(3333, () => console.log("Server is running"))
