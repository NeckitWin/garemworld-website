import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame";
import Monitoring from "./Monitoring";
import Votes from "./Votes";
import Login from "./Login";

const RightPart = () => {
    return (
        <div className={s.right_part}>
            <Login />
            <InfoFrame/>
            <Votes/>
            <Monitoring/>
        </div>
    )
}

export default RightPart