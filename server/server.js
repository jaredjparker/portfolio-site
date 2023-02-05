require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080
const pgp = require('pg-promise')()
const db = pgp('postgres://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@' + process.env.ENV + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME)

app.use(cors())

// Endpoints for portfolio content
app.get('/api/experiences', (req, res, next) => {

    db.any('SELECT * FROM experience ORDER BY ordinalvalue;')
        .then((experiences) => {
            console.log(experiences)
            res.status(200).send(experiences)
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})