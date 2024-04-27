import s from './Server.module.css'
import {NavLink} from "react-router-dom";

const Server = (props) => {
    return (
        <NavLink to={props.link} className={s.server}>
            <div className={s.loading}></div>
            <div className={s.description}>
                <h4>{props.name}</h4>
                <p>Онлайн: {props.online}</p>
            </div>
        </NavLink>
    )
}

export default Server