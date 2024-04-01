import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className={s.menu}>
                <NavLink to="/" className={s.logo}>GAREMWORLD</NavLink>
                <nav className={s.podmenu}>
                    <NavLink to="/">НАЧАТЬ ИГРУ</NavLink>
                    <NavLink to="/">СЕРВЕРА</NavLink>
                    <NavLink to="/">ДОНАТ</NavLink>
                    <NavLink to="/">ПРАВИЛА</NavLink>
                    <NavLink to="/">О ПРОЕКТЕ</NavLink>
                </nav>
                <NavLink to="/" className={s.profile}><img src="img/icons/profile.png" alt="profile icon"/>Личный кабинет</NavLink>
            </nav>
        </header>
    )
}

export default Header