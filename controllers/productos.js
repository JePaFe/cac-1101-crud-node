const { validationResult } = require('express-validator')

const connection = require('../db')

const index = (req, res) => {
    connection.query('SELECT id, nombre FROM productos', (error, results) => {
        if (error) {
            throw error
        }
    
        res.render('productos/index', { productos: results })
    })
}

const show = (req, res) => {
    connection.query('SELECT id, nombre, descripcion FROM productos WHERE id = ?', [ req.params.nro ], (error, result) => {
        if (error) {
            throw error
        }
    
        if (result.length > 0) {
            res.render('productos/show', { producto: result[0] })
        } else {
            res.send('No existe el producto')
        }
    })
}

const create = (req, res) => {
    res.render('productos/create', { values: {} })
}

const store = (req, res) => {
    // console.log(req.body)
    // res.send('Procesando')

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('productos/create', { values: req.body, errors: errors.array() })
    } else {
        connection.query('INSERT INTO productos SET ?', 
            { nombre: req.body.nombre, descripcion: req.body.description }, (error) => {
            if (error) {
                throw error
            }
    
            res.redirect('/productos')
        })
    }
}

const edit = (req, res) => {
    // res.render('productos/edit', { values: {} })

    connection.query('SELECT id, nombre, descripcion FROM productos WHERE id = ?', [ req.params.nro ], (error, result) => {
        if (error) {
            throw error
        }
    
        if (result.length > 0) {
            res.render('productos/edit', { values: {}, producto: result[0] })
        } else {
            res.send('No existe el producto')
        }
    })
}

const update = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('productos/edit', { values: req.body, errors: errors.array(), producto: {} })
    } else {
        connection.query('UPDATE productos SET ? WHERE id = ?', [{ nombre: req.body.nombre, descripcion: req.body.description }, req.body.id ], (error) => {
            if (error) {
                throw error
            }
    
            res.redirect('/productos')
        })
    }
}

const destroy = (req, res) => {
    // res.send('Borrado: ' + req.params.nro)

    connection.query('DELETE FROM productos WHERE id = ?', [ req.params.nro ], (error) => {
        if (error) {
            throw error
        }

        res.redirect('/productos')
    })
}

module.exports = {
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy
}