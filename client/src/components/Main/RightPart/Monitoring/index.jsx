import s from './Monitoring.module.css'
import Server from "./Server";
import {useState} from "react";
import axios from "axios";

const Monitoring = () => {
    const [im, setIm] = useState(null)
        axios.get('https://api.garemworld.su/servers').then(res => {
            setIm(res.data.im)
        }).catch(() =>
            axios.get('http://localhost:8081/servers').then(res => {
                setIm(res.data.im)
            })).catch(() => {
            setIm('Сервер отключен')
        })
    const servers = [
        {
            name: "IndustrialMagically",
            link: "/servers/IM",
            online: im
        }, {
            name: "SkyrimRPG",
            link: "/servers/SRPG",
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
                <p className={s.servers_online}>
                    Общий онлайн: {im}
                </p>
            </div>
        </div>
    )
}

export default Monitoring