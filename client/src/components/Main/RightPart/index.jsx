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
            <iframe src="https://discord.com/widget?id=1212174147019481118&theme=dark" width="256" height="300"
                    allowTransparency="true" frameBorder="0" title="Discord"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style={{marginTop:'40px'}}></iframe>
        </div>
    )
}

export default RightPart