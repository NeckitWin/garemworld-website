const express = require('express');
const config = require('config');
const db = require('./modules/db');
const queries = require('./modules/queries');

const app = express();
const PORT = config.get('serverPort');

// Маршрут для получения данных из базы данных
app.get('/api/data', (req, res) => {
    queries.getData((error, data) => {
        if (error) {
            res.status(500).json({ error: 'Ошибка сервера' });
        } else {
            res.json(data);
        }
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
