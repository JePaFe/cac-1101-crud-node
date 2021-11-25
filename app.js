require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const session = require('express-session')

app.use(session({
    secret: 'FV*_54V56yG^B_<5',
    resave: false,
    saveUninitialized: false
}))

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

const isLogin = (req, res, next) => {
    if (!req.session.user_id && req.url != '/login' && req.url != '/register'&& req.url != '/contacto') {
        res.redirect('/login')
    }

    next()
}

app.use(isLogin)

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', require('./routes/auth'))
app.use('/', require('./routes/productos'))
app.use('/', require('./routes/contacto'))

app.use((req, res, next) => {
    res.status(404).send('Not found')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`http://localhost:${port}`))