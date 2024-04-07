import s from './Profile.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Profile = ({setLogin}) => {
    const [name, setName] = useState('')
    const [coins, setCoins] = useState(0)
    const [gems, setGems] = useState(0)
    const [role, setRole] = useState('')
    axios.get('https://api.garemworld.su/user')
        .then(res => {
            if ( res.data.valid ) {
                setName(res.data.username)
                setCoins(res.data.result.coin)
                setGems(res.data.result.gem)
                setRole('Игрок')
            }
        })
        .catch(err => console.log(err))

    const exit = async () => {
        await axios.get('https://api.garemworld.su/logout')
            .then((response) => {
                if (response.data.message === true) {
                    setLogin(false)
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div className={s.profile}>
            <div className={s.profile_data}>
                <img src="https://cdn.mc-heads.com/images/3dskulls/128/e7d542a6-2ea3-429d-92e4-22a85ce91587.png"
                     alt="Head"/>
                <div>
                    <p>{ name }</p>
                    <p style={{color: `#f00`}}>{role}</p>
                </div>
            </div>
            <div className={s.wallet}>
                <span>{coins} монет</span>
                <span>{gems} гемов</span>
            </div>
            <nav>
                <NavLink to={'/user'}>Личный кабинет</NavLink>
                <NavLink onClick={exit} to={'/'}>Выйти</NavLink>
            </nav>
        </div>
    )
}

export default Profile