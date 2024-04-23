import s from './Skin.module.css'
import {useEffect} from "react"
import * as skinview3d from "skinview3d"

const Skin = ({name}) => {
    useEffect( () => {
        if (name!==undefined && name!==null && name!=='') {
            const skinViewer = new skinview3d.SkinViewer({
                canvas: document.getElementById("skin_container"),
                width: 280,
                height: 392,
                skin: `img/steve.png`
            })
            skinViewer.loadSkin(`https://api.garemworld.su/skins/${name}.png`).catch(err => console.log("Ошибка загрузки скина"))
            skinViewer.loadCape(`https://api.garemworld.su/cloaks/${name}.png`).catch(err => console.log("Ошибка загрузки плаща"))
            skinViewer.animation = new skinview3d.WalkingAnimation();
        }
    }, [name]);
    return (
        <canvas className={s.skin} id="skin_container"></canvas>
    )
}

export default Skin