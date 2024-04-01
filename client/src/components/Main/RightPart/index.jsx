import s from './RightPart.module.css'
import InfoFrame from "./InfoFrame";
import Monitoring from "./Monitoring";

const RightPart = () => {
    return (
        <div className={s.right_part}>
            <InfoFrame />
            <Monitoring />
        </div>
    )
}

export default RightPart