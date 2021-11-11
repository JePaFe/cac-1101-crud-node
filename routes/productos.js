const express = require('express')
const router = express.Router()

const productos = require('../productos')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos', (req, res) => {
    res.render('productos/index', { productos: productos.all() })
})

router.get('/productos/:nro', (req, res) => {
    res.render('productos/show', { producto: productos.find(req.params.nro) })
})

module.exports = router