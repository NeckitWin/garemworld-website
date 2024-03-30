import s from './Monitoring.module.css'
import Server from "./Server";

const Monitoring = () => {
    const servers = [
        {
            name: "IndustrialMagicallyRPG",
            link: "/",
            online: "в разработке"
        }, {
            name: "HighTechnology",
            link: "/",
            online: "в разработке"
        }
    ]
    return (
        <div className={s.monitoring_frame}>
            <h3 className={s.title}>Мониторинг серверов</h3>
            <div className={s.servers_list}>
                {servers.map(el => (
                    <Server name={el.name} link={el.link} online={el.online} />
                ))}
            </div>
        </div>
    )
}

export default Monitoring