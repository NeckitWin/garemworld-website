import s from './LeftPart.module.css'

const LeftPart = () => {
    return (
        <div className={s.left_part}>
            <div className={s.banner}>
                <img src="https://64.media.tumblr.com/5eb49aff7c0608daaed49bbf03bbe2bf/d04e4c3932c2092e-68/s500x750/8b63afe406f306a22f18106a7fbc76d86475750a.gifv" alt="banner" className={s.banner_img}/>
            </div>
        </div>
    )
}

export default LeftPart