import s from './InfoFrame.module.css'
import InfoLink from "./InfoLink";

const InfoFrame = () => {
    const data = [
    {
        link: "https://discord.gg/tDGak75V4u",
        icon: "img/icons/pickaxe.png",
        title: "Лаунчер",
        description: "Установите лаунчер и начните игру!"
    }, {
        link: "https://discord.gg/tDGak75V4u",
        icon: "img/icons/discord.png",
        title: "Discord",
        description: "Форум и приятное общение!"
    }
]
    return (
        <div className={s.info_frame}>
            {data.map((el, index) => (
                <InfoLink link={el.link} icon={el.icon} title={el.title} description={el.description}/>
            ))}
        </div>
    )
}

export default InfoFrame