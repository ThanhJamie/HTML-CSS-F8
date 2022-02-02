const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})