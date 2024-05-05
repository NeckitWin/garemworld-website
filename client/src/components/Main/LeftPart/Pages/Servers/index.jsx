import s from './Servers.module.css'
import Podmenu from "./Podmenu";
import Serverinfo from "./Serverinfo";
import {useState} from "react";

const Servers = () => {
    const [server, setServer] = useState('IM')

    return (
        <div className={s.servers}>
            <Podmenu setServer={setServer} />

            <Serverinfo server={server} />
        </div>
    )
}

export default Servers