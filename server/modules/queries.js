const db = require('./db');

const getData = (callback) => {
    const query = 'SELECT * FROM users'; // Замените 'ваша_таблица' на имя вашей таблицы

    db.query(query, (error, results) => {
        if (error) {
            console.error('Ошибка выполнения запроса:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = {
    getData
};