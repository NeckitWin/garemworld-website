import s from './News.module.css'
import Post from "./Post";

const News = () => {
    const news = [
        {
            img: 'img/news/open_imrpg.png',
            title: 'Открытие сервера IndustrialMagicallyRPG',
            description: (
                <>
                    Мы рады сообщить вам, что открылся первый сервер нашего проекта!<br/>
                    На нём вы сможете насладиться технологиями, магией и элементами RPG в одном мире!
                </>
            ),
            date: '14.04.2024',
            link: '/servers/imrpg'
        },
        {
            img: 'https://i.redd.it/24udiikpheu71.gif',
            title: 'Открытие проекта!',
            description: 'Мы рады приветствовать вас на нашем проекте!',
            date: '01.04.2024',
            link: 'https://discord.gg/tDGak75V4u'
        }
    ]
    return (
        <div className={s.news}>
            {news.map((el, index) => (
                <Post key={index} img={el.img} title={el.title} description={el.description} date={el.date}
                      link={el.link}/>
            ))}
        </div>
    )
}

export default News