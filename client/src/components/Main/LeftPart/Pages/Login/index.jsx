import s from './Login.module.css'
import {useState} from "react";

const Login = () => {
    const [value, setValue] = useState('text')
    return (
        <div className={s.login}>
            <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
        </div>
    )
}

export default Login