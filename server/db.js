import express from 'express'
import config from 'config'
import mysql from 'mysql'
import cors from 'cors'
import crypto from 'crypto';
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import { body, validationResult } from 'express-validator'

const IP = config.get('serverIP')
const userDB = config.get('userDB')
const passwordDB = config.get('passwordDB')
const database = config.get('database')

const app = express()
app.use(cors({
    origin: ['http://localhost:3000', 'https://garemworld.su'],
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
}, (err) => { if (err) console.log("Ошибка подключения к бд") })

app.get('/', (req, res) => {
    if (req.session.username) {
        return res.json({valid: true, username: req.session.username})
    }
    else {
        return res.json({valid: false})
    }
})

app.post('/signup',
    [
        body('username').trim().escape(),
        body('email').trim().escape(),
        body('password').trim().escape()
    ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({message: "Некорректные данные"})
    }
    const hashedPassword = crypto.createHash('sha256').update(req.body.password.join('')).digest('hex');
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
    const values = [req.body.username, req.body.email, hashedPassword]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json({message: "Ошибка регистрации"})
        console.log(`Пользователь ${req.body.username} | ${req.body.email} успешно зарегистрирован`)
        return res.json({message: "Регистрация прошла успешно"})
    })
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
                return res.json({ Message: "Ошибка авторизации" });
            }
            if (result.length > 0) {
                req.session.username = result[0].username;
                console.log(`Пользователь ${req.session.username} успешно авторизован`);
                return res.json({ Login: true })
            }
            else return res.json({ Login: false })
        });
    });

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})