import s from './LeftPart.module.css';
import Pages from "./Pages";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const LeftPart = () => {
    const [banner, setBanner] = useState('https://64.media.tumblr.com/5eb49aff7c0608daaed49bbf03bbe2bf/d04e4c3932c2092e-68/s500x750/8b63afe406f306a22f18106a7fbc76d86475750a.gifv');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') setBanner('https://64.media.tumblr.com/5eb49aff7c0608daaed49bbf03bbe2bf/d04e4c3932c2092e-68/s500x750/8b63afe406f306a22f18106a7fbc76d86475750a.gifv')
        else if (location.pathname === '/start') setBanner('https://media4.giphy.com/media/WoRFcCl7cINtZcz7dC/200.gif')
        else if (location.pathname.startsWith('/servers')) setBanner('https://i.pinimg.com/originals/55/6c/e1/556ce1dc9f164dfe0723942e36c74e9f.gif')
        else if (location.pathname === '/donate') setBanner('https://i.pinimg.com/originals/6e/85/f7/6e85f7e0111ac569249afb790efff78f.gif')
        else if (location.pathname.startsWith('/rules')) setBanner('https://i.pinimg.com/originals/8e/d6/8c/8ed68cb0e0257aef072b8431648b4e81.gif')
        else if (location.pathname.startsWith('/info')) setBanner('https://i.pinimg.com/originals/75/9e/0d/759e0d7653c18b3d90dd0ab334b75ba9.gif')
        else if (location.pathname === '/user') setBanner('https://i.redd.it/kvxwushpheu71.gif')
        else setBanner('https://64.media.tumblr.com/5eb49aff7c0608daaed49bbf03bbe2bf/d04e4c3932c2092e-68/s500x750/8b63afe406f306a22f18106a7fbc76d86475750a.gifv')

    }, [location.pathname]);
    return (
        <div className={s.left_part}>
            <div className={s.banner}>
                <img
                    src={banner}
                    alt="banner"
                />
            </div>
            <Pages/>
        </div>
    );
};

export default LeftPart;
