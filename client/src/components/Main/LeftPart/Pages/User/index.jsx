import s from './User.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Skin from "./Skin";

const User = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://api.garemworld.su/user')
            .catch(err => console.log("Ошибка подключения к серверу"))
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.result.username)
                    setDate(res.data.result.date)
                    setEmail(res.data.result.email)
                } else navigate('/signup')
            }).catch(err => console.log("Ошибка подключения к серверу"))
    }, [navigate]);

    const handleSubmit = async (event) => {

    }

    return (
        <div className={s.user}>
            <div className={s.user_frame}>
                <Skin key={0} name={name} />
                <div className={s.user_info}>
                    <h3>Данные игрока {name}</h3>
                    <p><span>Дата регистрации</span><span>{date}</span></p>
                    <p><span>Email</span><span>{email}</span></p>
                    <p><span>Статус в игре</span><span>Игрок</span></p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={s.add_skin}>
                <label htmlFor="skin">Загрузить скин</label><br/>
                <input type="file" name="skin"/><br/>
                <label htmlFor="cloak">Загрузить плащ</label><br/>
                <input type="file" name="cloak"/><br/>
                <label htmlFor="email">Изменить аватар</label><br/>
                <input type="file" name="avatar"/><br/>
                <button>Сохранить</button>

            </form>
        </div>
    )
}

export default User