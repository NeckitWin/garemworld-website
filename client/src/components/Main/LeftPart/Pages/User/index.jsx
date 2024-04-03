import s from './User.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const User = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://api.garemworld.su/user')
            .then(res => {
                if ( res.data.valid ) {
                    setName(res.data.username)
                }
                else navigate('/signup')
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className={s.user}>
            <h3>Теперь вы можете авторизоваться в лаунчере под ником {name}</h3>
        </div>
    )
}

export default User