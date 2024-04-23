import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame"
import Monitoring from "./Monitoring"
import Votes from "./Votes"
import Login from "./Login"
import Profile from "./Profile"
import {useEffect, useState} from "react"
import axios from "axios";

const RightPart = () => {
    const [login, setLogin] = useState(false)

    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('https://api.garemworld.su/user')
        .then((response) => {
            if (response.data.valid === true) setLogin(true)
            else setLogin(false)
        }).catch(err => {
            console.error(err)
            axios.get('https://localhost:8081/user')
            .then((response) => {
                if (response.data.valid === true) setLogin(true)
                else setLogin(false)
            }).catch(err => console.error(err))
        })
    }, [login])

    return (
        <div className={s.right_part}>
            {!login && <Login setLogin={setLogin}/>}
            {login && <Profile setLogin={setLogin}/>}
            <InfoFrame/>
            <Votes/>
            <Monitoring/>
        </div>
    )
}

export default RightPart