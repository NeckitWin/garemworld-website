import express from 'express'
import config from 'config'
import mysql from 'mysql'
import cors from 'cors'
import crypto from 'crypto';
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import {body, validationResult} from 'express-validator'

const IP = config.get('serverIP')
const userDB = config.get('userDB')
const passwordDB = config.get('passwordDB')
const database = config.get('database')

const app = express()
app.use(cors({
    origin: ['https://garemworld.su'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

const db = mysql.createConnection({
    host: IP,
    user: userDB,
    password: passwordDB,
    database: database
}, (err) => {
    if (err) console.log("Ошибка подключения к бд")
})

app.get('/user', (req, res) => {
    if (req.session.username) {
        const sql = `
            SELECT u.email, w.coin, w.gem 
            FROM users u 
            LEFT JOIN wallet w ON u.userid = w.userid 
            WHERE u.username = ?;
            `
        db.query(sql, [req.session.username], (err, result) => {
            if (err) {
                console.error("Ошибка получения данных пользователя:", err)
                return res.json({message: "Ошибка подключения к базе данных"})
            }
            if (result.length > 0) {
                return res.json({
                    valid: true,
                    username: req.session.username,
                    result: result[0]
                })
            } else {
                return res.json({message: "Ошибка получения данных пользователя"})
            }
        })
    } else {
        return res.json({valid: false})
    }
})

app.post('/login',
    [
        body('username').trim().escape(),
        body('password').trim().escape()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({message: "Некорректные данные"})
        }
        const hashedPassword = crypto.createHash('sha256').update(req.body.password.join('')).digest('hex');
        const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

        db.query(sql, [req.body.username, hashedPassword], (err, result) => {
            if (err) {
                console.error("Ошибка авторизации:", err);
                return res.json({message: "Ошибка авторизации"});
            }
            if (result.length > 0) {
                req.session.username = result[0].username;
                console.log(`Пользователь ${req.session.username} успешно авторизован`);
                return res.json({message: true})
            } else return res.json({message: "Неверный логин или пароль"})
        });
    });

app.post('/signup',
    [
        body('username').trim().escape(),
        body('email').trim().escape(),
        body('password').trim().escape()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({message: "Вы ввели некорректные данные"});
        }

        // Проверяем, существует ли пользователь с таким именем пользователя
        const usernameQuery = "SELECT * FROM users WHERE username = ?";
        db.query(usernameQuery, [req.body.username], (err, usernameResult) => {
            if (err) {
                return res.json({message: "Ошибка подключения сайта, обратитесь к администрации"});
            }
            if (usernameResult.length > 0) {
                return res.json({message: "Пользователь с таким именем уже существует"});
            }

            // Проверяем, существует ли пользователь с таким адресом электронной почты
            const emailQuery = "SELECT * FROM users WHERE email = ?";
            db.query(emailQuery, [req.body.email], (err, emailResult) => {
                if (err) {
                    return res.json({message: "Ошибка подключения сайта, обратитесь к администрации"});
                }
                if (emailResult.length > 0) {
                    return res.json({message: "Данный адрес электронной почты уже занят"});
                }

                // Если ни имя пользователя, ни адрес электронной почты не заняты, регистрируем нового пользователя
                const hashedPassword = crypto.createHash('sha256').update(req.body.password.join('')).digest('hex');
                const insertSql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
                const values = [req.body.username, req.body.email, hashedPassword];
                db.query(insertSql, values, (err, result) => {
                    if (err) {
                        return res.json({message: "Ошибка регистрации"});
                    }
                    console.log(`Пользователь ${req.body.username} | ${req.body.email} успешно зарегистрирован`);
                    return res.json({message: true});
                });
            });
        });
    });

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    return res.json({message: false});
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})