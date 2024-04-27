import s from './Monitoring.module.css'
import Server from "./Server";
import {useState} from "react";
import axios from "axios";

const Monitoring = () => {
    const [imrpg, setImrpg] = useState(null)
        axios.get('https://api.garemworld.su/servers').then(res => {
            setImrpg(res.data.imrpg)
        }).catch(() =>
            axios.get('http://localhost:8081/servers').then(res => {
                setImrpg(res.data.imrpg)
            })).catch(() => {
            setImrpg('Сервер отключен')
        })
    const servers = [
        {
            name: "IndustrialMagicallyRPG",
            link: "/servers/IMRPG",
            online: imrpg
        }, {
            name: "NewTechnologies",
            link: "/servers/NT",
            online: "в разработке"
        }
    ]
    return (
        <div className={s.monitoring_frame}>
            <h3 className={s.title}>Мониторинг серверов</h3>
            <div className={s.servers_list}>
                {servers.map((el, index) => (
                    <Server key={index} name={el.name} link={el.link} online={el.online}/>
                ))}
                <p href="#" className={s.servers_online}>
                    Общий онлайн: {imrpg}
                </p>
            </div>
        </div>
    )
}

export default Monitoring