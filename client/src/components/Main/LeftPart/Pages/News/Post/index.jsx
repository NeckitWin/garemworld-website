import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.img} alt="Новость"/>
            <div className={s.podpost}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className={s.post_info}>
                    <a href={props.link}>Узнать больше</a>
                    <span>{props.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Post