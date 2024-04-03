import s from './Pages.module.css'
import {Route, Routes} from "react-router-dom"
import News from "./News"
import Start from "./Start"
import Servers from "./Servers"
import Donate from "./Donate"
import Rules from "./Rules"
import Info from "./Info"
import User from "./User";
import Signup from "./Signup";

const Pages = () => {
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
            path: '/rules/*',
            element: <Rules />
        },
        {
            path: '/info',
            element: <Info />
        },
        {
            path: '/user',
            element: <User />
        },
        {
            path: '/signup',
            element: <Signup />
        }
    ]
    return (
        <div className={s.pages}>
            <Routes>
                {links.map((el, index) => (
                    <Route key={index} path={el.path} element={el.element} />
                ))}
            </Routes>
        </div>
    )
}

export default Pages