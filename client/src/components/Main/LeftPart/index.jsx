import s from './LeftPart.module.css'
import {Route, Routes} from "react-router-dom"
import News from "./Pages/News"
import Start from "./Pages/Start"
import Servers from "./Pages/Servers"
import Donate from "./Pages/Donate"
import Rules from "./Pages/Rules"
import Info from "./Pages/Info"

const LeftPart = () => {
    const links = [
        {
            path: '/',
            element: <News />
        },
        {
            path: '/start',
            element: <Start />
        },
        {
            path: '/servers',
            element: <Servers />
        },
        {
            path: '/donate',
            element: <Donate />
        },
        {
            path: '/rules',
            element: <Rules />
        },
        {
            path: '/info',
            element: <Info />
        }
    ]
    return (
        <div className={s.left_part}>
            <div className={s.banner}>
                <img src="https://64.media.tumblr.com/5eb49aff7c0608daaed49bbf03bbe2bf/d04e4c3932c2092e-68/s500x750/8b63afe406f306a22f18106a7fbc76d86475750a.gifv" alt="banner" className={s.banner_img}/>
            </div>
            <Routes>
                {links.map((el, index) => (
                    <Route key={index} path={el.path} element={el.element} />
                ))}
            </Routes>
        </div>
    )
}

export default LeftPart