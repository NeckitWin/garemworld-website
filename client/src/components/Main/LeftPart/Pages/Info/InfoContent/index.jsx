import s from './InfoContent.module.css'
import {Route, Routes} from "react-router-dom";
import Commands from "./Commands";
import Problems from "./Problems";
import Rating from "./Rating";
import Squad from "./Squad";

const InfoContent = () => {
    const infoLinks = [
        {
            path: '/',
            content: <Commands />
        },
        {
            path: '/commands',
            content: <Commands />
        },
        {
            path: '/rating',
            content: <Rating />
        },
        {
            path: '/squad',
            content: <Squad />
        },
        {
            path: '/problems',
            content: <Problems />

        }
    ]
    return (
        <div className={s.info_content}>
            <Routes>
                {infoLinks.map((el, index) => (
                    <Route key={index} path={el.path} element={el.content} />
                ))}
            </Routes>
        </div>
    )
}

export default InfoContent