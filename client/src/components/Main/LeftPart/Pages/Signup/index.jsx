import s from './Signup.module.css'
import {useState} from "react"
import axios from "axios"
import {NavLink, useNavigate} from "react-router-dom";

const Signup = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleInput = (event) => {
        setValues(prev=>({...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (values.password.join('') !== values.password2.join('')) {
            setError('Пароли не совпадают');
            return;
        }

        // Очищаем состояние ошибки перед отправкой запроса
        setError('');

        axios.post('https://api.garemworld.su/signup', values)
            .then(res =>
            {
                if (res.data.message === true) {
                    alert("Регистрация прошла успешно")
                    navigate('/')
                } else {
                    setError(res.data.message)
                }
            })
            .catch(() =>
                axios.post('http://localhost:8081/signup', values)
                    .then(res => {
                        if (res.data.message === true) {
                            alert("Регистрация прошла успешно")
                            navigate('/')
                        } else {
                            setError(res.data.message)
                        }
                    })
            )
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form_frame}>
                <h3>Регистрация</h3>
                <input name="username" onChange={handleInput} type="text" placeholder="Никнейм" pattern="[a-zA-Z0-9]+" minLength="3" maxLength="16" required />
                <input name="email" onChange={handleInput} type="text" placeholder="Электронная почта"  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" minLength="3" required />
                <input name="password" onChange={handleInput} type="password" placeholder="Пароль" pattern="[a-zA-Z0-9]+" minLength="8" maxLength="52" required />
                <input name="password2" onChange={handleInput} type="password" placeholder="Повторите пароль" pattern="[a-zA-Z0-9]+" minLength="8" maxLength="52" required />
                <button>Зарегистрироваться</button>
                <p className={s.check}>Нажимая кнопку "Зарегистрироваться", вы соглашаетесь с <NavLink to="/rules">правилами</NavLink> проекта</p>
                <NavLink to="/">Войти</NavLink>
                {error && <p className={s.error}>{error}</p>}
            </form>
        </div>
    )
}

export default Signup