const { imoveis } = require('../dados/imoveis')

const get = (req, res) => {
    res.send(imoveis)
}

const getPorId = (req, res) => {
    const { id } = req.params
    const result = imoveis.filter((imovel) => {
        return imovel.id == id
    })
    res.send(result)
}

module.exports = {
    get,
    getPorId
}