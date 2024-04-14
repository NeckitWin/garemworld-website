import s from './Start.module.css'
import Block from "./Block";

const Start = () => {
    const blocks = [
        {
            icon: 'https://media.tenor.com/7lirhLLRJWAAAAAj/ai-hoshino-ai-dance.gif',
            title: 'Авторизация',
            text: 'Зарегистрируйтесь у нас на сайте',
            linktext: 'Зарегистрироваться',
            link: '/signup'
        },
        {
            icon: 'https://media.tenor.com/hYkRcm80JFwAAAAj/foxy-foxplushy.gif',
            title: 'Лаунчер',
            text: 'Установите наш лаунчер, чтобы начать играть',
            linktext: 'Установить',
            link: 'https://launcher.garemworld.su/GaremWorld.exe'
        },
        {
            icon: 'https://media.tenor.com/-169fSymeTgAAAAj/anime-girl.gif',
            title: 'Сервера',
            text: 'Выберите сервер, на котором вы хотите играть',
            linktext: 'Сервера',
            link: '/servers'
        }
    ]

    const launchers = [
        {
            icon: 'https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png',
            linktext: 'Windows',
            link: 'https://launcher.garemworld.su/GaremWorld.exe'
        },
        {
            icon: 'https://cdn.icon-icons.com/icons2/1159/PNG/256/linux_81610.png',
            linktext: 'Linux',
            link: 'https://launcher.garemworld.su/GaremWorld.jar'
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/505px-Apple_logo_white.svg.png',
            linktext: 'MacOS',
            link: 'https://launcher.garemworld.su/GaremWorld.jar'
        }
    ]
    return (
        <div className={s.start}>
            <h3>Как начать играть</h3>
            <div className={s.blocks}>
                {blocks.map((block, index) => (
                    <Block key={index} icon={block.icon} title={block.title} text={block.text} linktext={block.linktext}
                           link={block.link}/>
                ))}
            </div>
            <h3 id="launcher">Скачать лаунчер</h3>
            <div className={s.blocks}>
                {launchers.map((block, index) => (
                    <Block key={index} index={index} icon={block.icon} title={block.title} text={block.text} linktext={block.linktext}
                           link={block.link}/>
                ))}
            </div>
        </div>
    )
}

export default Start