const express = require('express')
const app = express()

app.get('/somar', (req, res) => {
    const soma = (x, y) => {
        return x + y
    }
    let { num1, num2 } = req.query
    num1 = parseInt(num1)
    num2 = parseInt(num2) 
    const result = soma(num1, num2)

    res.send(String(result))
})

app.get('/subtrair', (req, res) => {
    const subtrair = (x, y) => {
        return x - y
    }
    let { num1, num2 } = req.query
    num1 = parseInt(num1)
    num2 = parseInt(num2) 
    const result = subtrair(num1, num2)

    res.send(String(result))
})

app.get('/multiplicar', (req, res) => {
    const multiplicar = (x, y) => {
        return x * y
    }
    let { num1, num2 } = req.query
    num1 = parseInt(num1)
    num2 = parseInt(num2) 
    const result = multiplicar(num1, num2)

    res.send(String(result))
})

app.get('/dividir', (req, res) => {
    const dividir = (x, y) => {
        return x / y
    }
    let { num1, num2 } = req.query
    num1 = parseInt(num1)
    num2 = parseInt(num2) 
    const result = dividir(num1, num2)

    res.send(String(result))
})

app.listen(8000)