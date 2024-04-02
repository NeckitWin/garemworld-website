import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame";
import Monitoring from "./Monitoring";
import Votes from "./Votes";

const RightPart = () => {
    return (
        <div className={s.right_part}>
            <InfoFrame/>
            <Votes/>
            <Monitoring/>
        </div>
    )
}

export default RightPart