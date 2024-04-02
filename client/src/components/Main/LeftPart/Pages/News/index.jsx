import s from './News.module.css'
import Post from "./Post";

const News = () => {
    const news = [
        {
            img: 'https://i.redd.it/24udiikpheu71.gif',
            title: 'Открытие проекта!',
            description: 'Мы рады приветствовать вас на нашем проекте!',
            date: '01.04.2024',
            link: 'https://garemworld.su'
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