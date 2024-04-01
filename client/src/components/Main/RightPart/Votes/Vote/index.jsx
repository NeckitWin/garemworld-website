import s from './Vote.module.css'
const Votes = (props) => {
    return (
        <a href={props.link} className={s.vote} target="_blank" rel="noreferrer">
            <img src={props.img} alt="Голосуйте за проект"/>
        </a>
    )
}

export default Votes