const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

const connection = require('../db')

router.get('/login', (req, res) => {
    if (req.session.user_id) {
        res.redirect('/')
    }

    res.render('auth/login')
})

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        connection.query('SELECT * FROM usuarios WHERE email = ?', [ req.body.email ], async (error, results) => {
            if (error) {
                throw error
            }
 
            if (results.length == 0 || !(await bcryptjs.compare(req.body.password, results[0].password))) {
                res.send('Usuario y/o password incorrectos 2')
            } else {
                req.session.user_id = results[0].id
                req.session.user_email = results[0].email

                res.redirect('/')
            }
        })
    } else {
        res.send('Usuario y/o password incorrectos 1')
    }
})

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async (req, res) => {
    const hash = await bcryptjs.hash(req.body.password, 8)

    connection.query('INSERT INTO usuarios SET ?', { email: req.body.email, password: hash }, (error) => {
        if (error) {
            throw error
        }

        res.redirect('/')
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = router