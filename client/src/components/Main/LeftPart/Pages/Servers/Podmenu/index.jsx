import s from './Podmenu.module.css'
import {NavLink} from "react-router-dom"
import {useState} from "react"

const Podmenu = ({setServer}) => {
    const servers = {
        "1.7.10": [
            {
                server:"IndustrialMagically",
                link:"IM"
            },
            {
                server: "SkyrimRPG",
                link: "SRPG"
            }
        ]
    }
    const [active, setActive] = useState(0);
    return (
        <nav className={s.servers_menu}>
            {servers["1.7.10"].map((el, index) => (
                <NavLink key={index} onClick={()=> { setActive(index); setServer(el.link)} } className={index===active ? s.active : ""} to={el.link}>{el.server}</NavLink>
            ))}
        </nav>
    )
}

export default Podmenu