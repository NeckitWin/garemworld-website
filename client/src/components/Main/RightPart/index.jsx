import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame";
import Monitoring from "./Monitoring";
import Votes from "./Votes";
import Login from "./Login";
import Profile from "./Profile";

const RightPart = () => {
    return (
        <div className={s.right_part}>
            <Login />
            <Profile />
            <InfoFrame/>
            <Votes/>
            <Monitoring/>
        </div>
    )
}

export default RightPart