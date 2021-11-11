const express = require('express')
const router = express.Router()

const { body, validationResult } = require('express-validator')

router.get('/contacto', (req, res) => {
    res.render('contacto', { values: {} })
})

router.post('/contacto', [
    body('nombre', 'El nombre tiene que tener 3 caracteres o mas').isLength(3).trim().escape(),
    body('email', 'Mensaje de error por el Correo').isEmail().trim().normalizeEmail(),
    body('mensaje', 'Mensaje obligatorio').notEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('contacto', { values: req.body, errors: errors.array() })
    } else {
        res.send('Enviado...')
    }

    // console.log(req.body, req.body.nombre)
    // console.log(errors)
    // res.send('Nombre: ' + req.body.nombre)
})

module.exports = router