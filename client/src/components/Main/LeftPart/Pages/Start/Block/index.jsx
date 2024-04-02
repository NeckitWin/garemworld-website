import s from './Block.module.css'
import {NavLink} from "react-router-dom"

const Start = (props) => {
    return (
        <div className={s.block}>
            <img src={props.icon} alt="icon"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <NavLink to={props.link}>{props.linktext}</NavLink>
        </div>
    )
}

export default Start