import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

const links = [
    { name: "НАЧАТЬ ИГРУ", path: "/start" },
    { name: "СЕРВЕРА", path: "/servers" },
    { name: "ДОНАТ", path: "/donate" },
    { name: "ПРАВИЛА", path: "/rules" },
    { name: "О ПРОЕКТЕ", path: "/info" }
];

const bgs = [
    '/img/animebg.gif',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01ca0c58-4f02-4aa0-b48f-a91bc2b8622e/deo9pe6-a8a517ae-2975-424b-8028-925230423ea8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxY2EwYzU4LTRmMDItNGFhMC1iNDhmLWE5MWJjMmI4NjIyZVwvZGVvOXBlNi1hOGE1MTdhZS0yOTc1LTQyNGItODAyOC05MjUyMzA0MjNlYTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k54KlYvMBKRGipwtCdxXUGtENorcqsPwaPY7jfq0pOs',
    'https://steamuserimages-a.akamaihd.net/ugc/4106711831544450503/5A4FAB55E0C723F376B8EF6B12542C69E4F5FF43/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    'https://i.pinimg.com/originals/3d/95/20/3d9520c2498c25eac5b6407de070cb6f.gif',
    'https://i.imgur.com/cn07kNv.gif'
];

export default function Header() {
    const [active, setActive] = useState(null);
    const [background, setBackground] = useState(localStorage.getItem('background') || bgs[0]);

    useEffect(() => {
        document.body.style.backgroundImage = `url("${background}")`;
        localStorage.setItem('background', background);
    }, [background]);

    const changeBG = () => setBackground(bgs[(bgs.indexOf(background) + 1) % bgs.length]);

    return (
        <header>
            <nav className={s.menu}>
                <NavLink to="/" className={s.logo} onClick={() => setActive(null)}></NavLink>
                <nav className={s.podmenu}>
                    {links.map((el, index) => (
                        <NavLink key={index} onClick={() => setActive(index)} to={el.path} className={`${s.link} ${active === index ? s.active : ""}`}>{el.name}</NavLink>
                    ))}
                    <button className={s.topic} onClick={changeBG} style={{ backgroundImage: `url(${background})` }}></button>
                </nav>
                <NavLink to="/user" onClick={() => setActive(null)} className={s.profile}><img src="/img/icons/profile.png" alt="profile icon" />Личный кабинет</NavLink>
            </nav>
        </header>
    );
}
