import s from './InfoLink.module.css'

const InfoLink = (props) => {
    return (
    <a href={props.link} className={s.info_bg} target="_blank" rel="noreferrer">
        <img src={props.icon} alt="icon"/>
        <div>
            <h3>{ props.title }</h3>
            <p>{ props.description }</p>
        </div>
    </a>
    )
}

export default InfoLink