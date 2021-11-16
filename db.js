const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'codo_a_codo'
})

connection.connect((error) => {
    if (error) {
        throw error
    }
})

module.exports = connection