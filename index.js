const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const { join } = require('path')

app.use(express.static('assets'))
app.get('*', (_, res) => res.sendFile(join(__dirname, 'index.html')))
app.listen(port, () => console.log(`http://localhost:${port}`))
