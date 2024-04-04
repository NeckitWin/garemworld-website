import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame"
import Monitoring from "./Monitoring"
import Votes from "./Votes"
import Login from "./Login"
import Profile from "./Profile"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

const RightPart = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (login) {
            navigate('/')
        }
    }, [login, navigate])
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