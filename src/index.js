const express = require('express')
const clientRouter = require('./routes/clientRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const cors = require("cors")
const noteRouter = require('./routes/noteRoute')
const companyRouter = require('./routes/companyRoutes')
const loginRouter = require('./routes/loginRoutes')

const app = express()
app.use(cors());
app.use(express.json());
app.use('/client',clientRouter)
app.use('/service',serviceRoutes)
app.use('/company',companyRouter)
app.use('/invoice', noteRouter)
app.use('/login', loginRouter)

app.listen(3333, () => console.log("Server is running"))
