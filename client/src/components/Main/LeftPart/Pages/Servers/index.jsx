import s from './Servers.module.css'
import Podmenu from "./Podmenu";
import {useState} from "react";
import Serverinfo from "./Serverinfo";

const Servers = () => {
    const [server, setServer] = useState('IMRPG')
    return (
        <div className={s.servers}>
            <Podmenu />

            <Serverinfo />
        </div>
    )
}

export default Servers