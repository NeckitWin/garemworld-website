import s from './Login.module.css'
import {useState} from "react";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form_frame}>
                <h3>Авторизация</h3>
                <input type="text" placeholder="Никнейм" onChange={e => setLogin(e.target.value)} value={ login } />
                <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} value={ password } />
                <button>Войти</button>
            </form>
        </div>
    )
}

export default Login