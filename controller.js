const connection = require('./db')

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
    res.render('productos/create')
}

const store = (req, res) => {
    console.log(req.body)
    res.send('Procesando')
}

module.exports = {
    index,
    show,
    create,
    store
}