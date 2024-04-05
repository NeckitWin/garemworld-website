import s from './Info.module.css'
import InfoNavBar from "./InfoNavBar";
import InfoContent from "./InfoContent";

const Info = () => {
    return (
        <div className={s.info}>
            <InfoNavBar />

            <InfoContent />
        </div>
    )
}

export default Info