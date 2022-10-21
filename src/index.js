const express = require('express')
const clientRouter = require('./routes/clientRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const cors = require("cors")

const app = express()
app.use(cors());
app.use(express.json());
app.use('/client',clientRouter)
app.use('/service',serviceRoutes)

app.listen(3333, () => console.log("Server is running"))
