import express from 'express'
import config from 'config'
import mysql from 'mysql'
import cors from 'cors'
import crypto from 'crypto';
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import {body, validationResult} from 'express-validator'
import path from "path";
import * as fs from "node:fs";
import multer from 'multer';
import {onlineimrpg} from "./minecraft.js";

const IP = config.get('serverIP')
const userDB = config.get('userDB')
const passwordDB = config.get('passwordDB')
const database = config.get('database')

const app = express()
app.use(cors({
    origin: ['http://localhost:3000'],
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
            SELECT u.username, u.email, w.coin, w.gem, ui.date 
            FROM users u 
            LEFT JOIN wallet w ON u.userid = w.userid 
            LEFT JOIN userinfo ui ON u.userid = ui.userid 
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

app.post('/signup', [
    body('username').trim().escape(),
    body('email').trim().escape(),
    body('password').trim().escape()
], (req, res) => {
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
            const insertUserSql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
            const userValues = [req.body.username, req.body.email, hashedPassword];

            db.query(insertUserSql, userValues, (err, userResult) => {
                if (err) {
                    return res.json({message: "Ошибка регистрации"});
                }

                // Добавляем данные в таблицу userinfo
                const currentDate = new Date();
                const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
                const insertUserInfoSql = "INSERT INTO userinfo (`date`, `userid`) VALUES (?, ?)";
                const userInfoValues = [formattedDate, userResult.insertId];

                db.query(insertUserInfoSql, userInfoValues, (err, userInfoResult) => {
                    if (err) {
                        return res.json({message: "Ошибка регистрации"});
                    }
                    console.log(`Пользователь ${req.body.username} | ${req.body.email} успешно зарегистрирован`);
                    return res.json({message: true});
                });
            });
        });
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    return res.json({message: true});
})

app.use('/skins', function (req, res, next) {
    const skinsPath = path.join("/var/www/server/", 'skins', req.path);
    fs.readFile(skinsPath, function (err, data) {
        if (err) {
            res.status(404).end();
        } else {
            res.status(200);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'image/png');
            res.end(data);
            next();
        }
    });
});

app.use('/cloaks', function (req, res, next) {
    const cloaksPath = path.join("/var/www/server/", 'cloaks', req.path);
    fs.readFile(cloaksPath, function (err, data) {
        if (err) {
            res.status(404).end();
        } else {
            res.status(200);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'image/png');
            res.end(data);
            next();
        }
    });
});

app.post('/uploadskin', (req, res) => {
    if (!req.session.username) {
        return res.json({message: "Вы не авторизованы"});
    }

    const upload = multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => cb(null, 'C:\\Users\\necki\\Desktop\\Projects\\webstorm\\garemworld\\server\\skins'),
            filename: (req, file, cb) => {
                const username = req.session.username;
                const fileExtension = path.extname(file.originalname);
                const newFilename = `${username}${fileExtension}`;
                cb(null, newFilename);
            }
        }),
        limits: {
            fileSize: 8 * 1024 * 1024
        },
        fileFilter: (req, file, cb) => {
            if (path.extname(file.originalname) !== '.png') {
                return cb(new Error('Только файлы PNG допустимы для скина и не более 8 МБ!'));
            }
            cb(null, true);
        }
    }).single('skin');

    upload(req, res, (err) => {
        if (err) {
            return res.json({message: "Ошибка загрузки файла: " + err.message});
        }
        return res.json({message: "Скин успешно загружен! Обновите страницу."});
    });
});

app.post('/uploadcloak', (req, res) => {
    if (!req.session.username) {
        return res.json({message: "Вы не авторизованы"});
    }

    const upload = multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => cb(null, 'C:\\Users\\necki\\Desktop\\Projects\\webstorm\\garemworld\\server\\cloaks'),
            filename: (req, file, cb) => {
                const username = req.session.username;
                const fileExtension = path.extname(file.originalname);
                const newFilename = `${username}${fileExtension}`;
                cb(null, newFilename);
            }
        }),
        limits: {
            fileSize: 8 * 1024 * 1024
        },
        fileFilter: (req, file, cb) => {
            if (path.extname(file.originalname) !== '.png') {
                return cb(new Error('Только файлы PNG допустимы для плаща и не более 8 МБ!'));
            }
            cb(null, true);
        }
    }).single('cloak');

    upload(req, res, (err) => {
        if (err) {
            return res.json({message: "Ошибка загрузки файла: " + err.message});
        }
        return res.json({message: "Плащ успешно загружен! Обновите страницу."});
    });
});


app.get('/servers', (req, res) => {
    return res.json({imrpg: onlineimrpg});
});

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})