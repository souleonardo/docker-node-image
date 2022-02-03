const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá minha imagem')
})

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`)
})
