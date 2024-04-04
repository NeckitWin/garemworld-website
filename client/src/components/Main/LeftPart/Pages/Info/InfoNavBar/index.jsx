import s from './InfoNavBar.module.css'
import {NavLink} from "react-router-dom";

const InfoNavBar = () => {
    const infoLinks = [
        {
            path: '/info/commands',
            content: 'Список команд'
        },
        {
            path: '/info/rating',
            content: 'Рейтинг'
        },
        {
            path: '/info/squad',
            content: 'Состав проекта'
        },
        {
            path: '/info/contacts',
            content: 'Контакты'
        }
    ]
    return (
        <div className={s.info_navbar}>
            {infoLinks.map((el, index) => (
                <NavLink key={index} to={el.path}>{el.content}</NavLink>
            ))}
        </div>
    )
}

export default InfoNavBar