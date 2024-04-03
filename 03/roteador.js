const express = require('express')
const app = express()
const { get, getPorId } = require('./controladores/imoveis')

app.get('/imoveis', get)
app.get('/imoveis/:id', getPorId)

module.exports = app