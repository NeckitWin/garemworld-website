import s from './Post.module.css'
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.img} alt="Новость"/>
            <div className={s.podpost}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className={s.post_info}>
                    <NavLink to={props.link}>Узнать больше</NavLink>
                    <span>{props.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Post