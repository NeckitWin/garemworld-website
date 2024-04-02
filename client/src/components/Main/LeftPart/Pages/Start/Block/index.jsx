import s from './Block.module.css'

const Start = (props) => {
    return (
        <div className={s.block}>
            <img src={props.icon} alt="icon"/>
                <h2>{props.key}</h2>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <a href={props.link}>{props.linktext}</a>
        </div>
    )
}

export default Start