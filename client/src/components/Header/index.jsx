import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import {useState} from "react";

const Header = () => {
    const links = [
        {name: "НАЧАТЬ ИГРУ", path: "/start"},
        {name: "СЕРВЕРА", path: "/servers"},
        {name: "ДОНАТ", path: "/donate"},
        {name: "ПРАВИЛА", path: "/rules"},
        {name: "О ПРОЕКТЕ", path: "/info"}
    ]

    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <header>
            <nav className={s.menu}>
                <NavLink to="/" className={s.logo}></NavLink>
                <nav className={s.podmenu}>
                    {links.map((el, index) => (
                        <NavLink key={index} onClick={()=>handleClick(index)} to={el.path} className={`${s.link} ${active===index ? s.active : ""}`}>{el.name}</NavLink>
                    ))}
                </nav>
                <NavLink to="/user" className={s.profile}><img src="img/icons/profile.png" alt="profile icon"/>Личный кабинет</NavLink>
            </nav>
        </header>
    )
}

export default Header