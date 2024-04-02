import s from './Rules.module.css';
import { NavLink, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import {useState} from "react";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

const Rules = () => {
    const rulesLinks = [
        { to: '/rules/1', text: 'Общие правила' },
        { to: '/rules/2', text: 'Общение в чате' },
        { to: '/rules/3', text: 'Ограничения' },
        { to: '/rules/4', text: 'Игровой процесс' },
        { to: '/rules/5', text: 'Политика состава' }
    ]
    const rulesPath = [
        {
            path: '/',
            component: <First />
        },
        {
            path: '1',
            component: <First />
        },
        {
            path: '2',
            component: <Second />
        },
        {
            path: '3',
            component: <Third />
        },
        {
            path: '4',
            component: <Fourth />
        },
        {
            path: '5',
            component: <Fifth />
        }
    ]

    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        active !== index ? setActive(index) : setActive(null);
    }

    return (
        <div className={s.rules_frame}>
            <nav className={s.rules_links}>
                {rulesLinks.map((el, index) => (
                    <NavLink key={index} onClick={()=>handleClick(index)} className={`${index===active ? s.active : ""}`} to={el.to}>{el.text}</NavLink>
                ))}
            </nav>
            <div className={s.rules}>
            <Routes>
                {rulesPath.map((el, index) => (
                    <Route key={index} path={el.path} element={el.component} />
                ))}
            </Routes>
            </div>
        </div>
    );
};

export default Rules;
