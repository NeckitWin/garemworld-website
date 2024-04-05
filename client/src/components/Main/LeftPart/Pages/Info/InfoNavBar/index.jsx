import s from './InfoNavBar.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";

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
            path: '/info/problems',
            content: 'Помощь'
        }
    ]

    const [active, setActive] = useState(null)

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <div className={s.info_navbar}>
            {infoLinks.map((el, index) => (
                <NavLink onClick={()=>handleClick(index)} className={active===index ? s.active : ""} key={index} to={el.path}>{el.content}</NavLink>
            ))}
        </div>
    )
}

export default InfoNavBar