import s from './User.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Skin from "./Skin";
import Panel from "./Panel";

const User = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://api.garemworld.su/user')
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.result.username)
                    setDate(res.data.result.date)
                    setEmail(res.data.result.email)
                } else navigate('/signup')
            }).catch(() => axios.get('http://localhost:8081/user')
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.result.username)
                    setDate(res.data.result.date)
                    setEmail(res.data.result.email)
                } else navigate('/signup')
            })
        )}, [navigate]);
    return (
        <div className={s.user}>
            <div className={s.user_frame}>
                <Skin key={0} name={name} />
                <div>
                <div className={s.user_info}>
                    <h3>Данные игрока {name}</h3>
                    <p><span>Дата регистрации</span><span>{date}</span></p>
                    <p><span>Email</span><span>{email}</span></p>
                    <p><span>Статус в игре</span><span>Игрок</span></p>
                </div>
                    <Panel />
                </div>
            </div>
        </div>
    )
}

export default User