const express = require('express')
const rota = express()
const { get, getPorId } = require('./controladores/imoveis')

rota.get('/imoveis', get)
rota.get('/imoveis/:id', getPorId)

module.exports = rota