const express = require('express')
const config = require('config')
const mysql = require('mysql')
const cors = require('cors')

const PORT = config.get('serverPort')
const IP = config.get('serverIP')
const user = config.get('userDB')
const password = config.get('passwordDB')
const database = config.get('database')

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: IP,
    user: user,
    password: password,
    database: database
})

app.get('/', (re, res) => {
    return res.send('Бэкэнд сторона')
})

app.get('/users', (req, res)=>{
    const sql = 'SELECT * FROM users'
    db.query(sql, (err, data) => {
        if (err) {console.log(err)}
        res.json(data)
    })
})

app.listen(PORT, () => {
    console.log(`Порт ${PORT} запущен`)
})