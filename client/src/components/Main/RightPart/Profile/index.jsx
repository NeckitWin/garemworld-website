import s from './Profile.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Profile = () => {
    const [name, setName] = useState('NeckitWin')
    const [money, setMoney] = useState(0)
    const [gems, setGems] = useState(0)
    const [role, setRole] = useState('Игрок')
    return (
        <div className={s.profile}>
            <div className={s.profile_data}>
                <img src="https://cdn.mc-heads.com/images/3dskulls/128/e7d542a6-2ea3-429d-92e4-22a85ce91587.png"
                     alt="Head"/>
                <div>
                    <p>{ name }</p>
                    <p style={{color: `#f00`}}>{role}</p>
                </div>
            </div>
            <div className={s.wallet}>
                <span>{money} монет</span>
                <span>{gems} гемов</span>
            </div>
            <nav>
                <NavLink to={'/user'}>Личный кабинет</NavLink>
                <NavLink to={'/logout'}>Выйти</NavLink>
            </nav>
        </div>
    )
}

export default Profile