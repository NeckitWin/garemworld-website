import s from './InfoLink.module.css'
import {NavLink} from "react-router-dom";

const InfoLink = (props) => {
    return (
    <NavLink to={props.link} className={s.info_bg} rel="noreferrer">
        <img src={props.icon} alt="icon"/>
        <div>
            <h3>{ props.title }</h3>
            <p>{ props.description }</p>
        </div>
    </NavLink>
    )
}

export default InfoLink