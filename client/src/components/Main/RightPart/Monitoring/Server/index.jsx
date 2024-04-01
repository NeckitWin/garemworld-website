import s from './Server.module.css'

const Server = (props) => {
    return (
        <a href={props.link} className={s.server}>
            <div className={s.loading}></div>
            <div className={s.description}>
                <h4>{props.name}</h4>
                <p>Онлайн: {props.online}</p>
            </div>
        </a>
    )
}

export default Server