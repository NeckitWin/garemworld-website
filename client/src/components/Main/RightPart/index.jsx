import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame"
import Monitoring from "./Monitoring"
import Votes from "./Votes"
import Login from "./Login"
import Profile from "./Profile"
import {useState} from "react"

const RightPart = () => {
    const [login, setLogin] = useState(false)
    return (
        <div className={s.right_part}>
            {!login && <Login login={login} setLogin={setLogin}/>}
            {login && <Profile/>}
            <InfoFrame/>
            <Votes/>
            <Monitoring/>
        </div>
    )
}

export default RightPart