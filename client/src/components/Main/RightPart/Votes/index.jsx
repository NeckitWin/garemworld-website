import s from './Votes.module.css'
import Vote from './Vote'

const Votes = () => {
    const votes = [
        {
            img: 'https://topcraft.club/media/projects/12065/tops.png',
            link: ''
        },
        {
            img: '/img/icons/widget_vote.webp',
            link: ''
        },
        {
            img: 'https://mctop.su/media/projects/6977/tops.png',
            link: ''
        }
    ]
    return (
        <div className={s.votes}>
            <h4>Голосуй за продвижение!</h4>
            <div className={s.votes_frame}>
                {votes.map((vote, index) => (
                    <Vote key={index} img={vote.img} link={vote.link}/>
                ))}
            </div>
            <div className={s.block_text}>
                <p>Вы дарите нам сообщество,</p>
                <p>а мы вам контент и подарки!</p>
            </div>
        </div>
    )
}

export default Votes