import s from './Serverinfo.module.css'

const Serverinfo = () => {
    return (
        <div>
            <img src="/img/bg.gif" alt="server-banner" className={s.server_banner}/>
            <div>
                <div>Дата вайпа</div>
                <div>Версия</div>
                <div>Размер основного мира</div>
                <div>Размер дополнительных миров</div>
            </div>
            <div className={s.modslist}>

            </div>
        </div>
    )
}

export default Serverinfo