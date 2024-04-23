import s from './Login.module.css'
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = ({setLogin}) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const navigate = useNavigate()

    axios.defaults.withCredentials = true

    const handleSubmit = async (event) => {
        event.preventDefault()

        axios.post('https://api.garemworld.su/login', values)
            .then((response) => {
                if (response.data.message === true) {
                    setLogin(true)
                    navigate('/')
                } else {
                    setError(response.data.message);
                }
            })
            .catch(err => {
                console.error(err);
                axios.post('https://localhost:8081/login', values)
                    .then((response) => {
                        if (response.data.message === true) {
                            setLogin(true)
                            navigate('/')
                        } else {
                            setError(response.data.message);
                        }
                    })
                    .catch(err => console.error(err));
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form_frame}>
                <h3>Войти в аккаунт</h3>
                <input name="username" onChange={handleInput} type="text" placeholder="Никнейм" pattern="[a-zA-Z0-9]+"
                       minLength="3" maxLength="16" required/>
                <input name="password" onChange={handleInput} type="password" placeholder="Пароль"
                       pattern="[a-zA-Z0-9]+" minLength="8" maxLength="52" required/>
                <button>Войти</button>
                {error && <p className={s.error}>{error}</p>}
                <NavLink to='/signup'>Зарегистрироваться</NavLink>
            </form>
        </div>
    )
}

export default Login