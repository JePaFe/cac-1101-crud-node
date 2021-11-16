const express = require('express')
const router = express.Router()

const controller = require('../controller')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos/create', controller.create)
router.post('/productos/store', controller.store)

router.get('/productos', controller.index)
router.get('/productos/:nro', controller.show)

module.exports = router