const mysql = require('mysql');
const config = require('config');

const IP = config.get('serverIP');
const userDB = config.get('userDB');
const passwordDB = config.get('passwordDB');
const database = config.get('database');

const connection = mysql.createConnection({
    host: IP,
    user: userDB,
    password: passwordDB,
    database: database
});

connection.connect((err) => {
    if (err) {
        console.error('Ошибка при подключении к базе данных: ' + err.stack);
        return;
    }
    console.log('Подключено к базе данных с ID потока ' + connection.threadId);
});

module.exports = connection;
