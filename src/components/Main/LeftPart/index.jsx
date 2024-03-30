import s from './LeftPart.module.css'

const LeftPart = () => {
    return (
        <div className={s.left_part}>
            <div className={s.banner}>
                <img src="https://i.pinimg.com/originals/d1/69/d6/d169d6822f1bf35c8c2833f4f57c135f.gif" alt="banner" className={s.banner_img}/>
            </div>
        </div>
    )
}

export default LeftPart