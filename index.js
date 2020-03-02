const express = require('express')
const app = express()
const port = process.env.port || 3000
const routes = require('./routes/todoRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/todos' , routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
