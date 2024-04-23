import s from './Podmenu.module.css'
import {NavLink} from "react-router-dom"
import {useState} from "react"

const Podmenu = () => {
    const servers = {
        "1.7.10": [
            {
                server:"IndustrialMagicallyRPG",
                link:"IMRPG"
            },
            {
                server: "NewTechnologies",
                link: "NT"
            }
        ]
    }
    const [active, setActive] = useState(0);
    return (
        <nav className={s.servers_menu}>
            {servers["1.7.10"].map((el, index) => (
                <NavLink onClick={()=> setActive(index)} className={index===active ? s.active : ""} to={el.link}>{el.server}</NavLink>
            ))}
        </nav>
    )
}

export default Podmenu