import s from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
    const mainlinks = [
        {
            content: 'Как начать играть?',
            href: '/start'
        },
        {
            content: 'Скачать лаунчер Windows',
            href: 'https://launcher.garemworld.su/GaremWorld.exe'
        },
        {
            content: 'Скачать лаунчер Linux',
            href: 'https://launcher.garemworld.su/GaremWorld.jar'
        },
        {
            content: 'Команда проекта',
            href: '/info/squad'
        }
    ]
    const sociallinks = [
        {
            content: 'Discord',
            href: 'https://discord.gg/tDGak75V4u'
        },
        {
            content: 'Техническая поддержка',
            href: 'https://discord.gg/tDGak75V4u'
        },{
            content: 'Публичная оферта',
            href: '/offer'
        },
        {
            content: 'Политика конфиденциальности',
            href: '/privacy'
        }
    ]
    return (
        <footer className={s.footer}>
            <div>
                <NavLink to="/"><img src="/img/full-logo.png" alt="logo"/></NavLink>
                <nav>
                    <ul>
                        {
                            mainlinks.map((el, index) => (
                                <li key={index}><NavLink className={s.links} to={el.href}>{el.content}</NavLink></li>
                            ))}
                    </ul>
                    <ul>
                        {
                            sociallinks.map((el, index) => (
                                <li key={index}><a className={s.links} target="_blank" rel="noreferrer" href={el.href}>{el.content}</a></li>
                            ))}
                    </ul>
                    <ul>
                        <li><a target="_blank" rel="noreferrer" href="https://neckitwin.github.io">Владелец: NeckitWin</a></li>
                        <li>© 2024 GaremWorld</li>
                        <li>Все права защищены</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer