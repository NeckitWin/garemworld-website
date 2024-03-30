import s from './Main.module.css'
import RightPart from "./RightPart";
import LeftPart from "./LeftPart";

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.together_part}>
                <LeftPart />
                <RightPart />
            </div>
        </main>
    )
}

export default Main