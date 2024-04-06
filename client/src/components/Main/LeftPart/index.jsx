import s from './LeftPart.module.css';
import Pages from "./Pages";

const LeftPart = () => {
    const banner = 'https://64.media.tumblr.com/5eb49aff7c0608daaed49bbf03bbe2bf/d04e4c3932c2092e-68/s500x750/8b63afe406f306a22f18106a7fbc76d86475750a.gifv';
    return (
        <div className={s.left_part}>
            <div className={s.banner}>
                <img
                    src={banner}
                    alt="banner"
                />
            </div>
            <Pages />
        </div>
    );
};

export default LeftPart;
