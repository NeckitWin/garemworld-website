import s from './Serverinfo.module.css'

const Serverinfo = ({server}) => {
    const servers = {
        IMRPG: {
            datewipe: '14.04.2024',
            version: '1.7.10',
            worldsize: '10000',
            othersize: '5000'
        },
        NT: {
            datewipe: 'В разработке',
            version: 'В разработке',
            worldsize: 'В разработке',
            othersize: 'В разработке'
        }
    }

    const serverData = servers[server];

    return (
        <div className={s.server}>
            <img src="https://i.pinimg.com/originals/f5/f2/74/f5f27448c036af645c27467c789ad759.gif" alt="server-banner" className={s.server_banner}/>
            <div className={s.server_info}>
                <div>Дата вайпа: {serverData.datewipe}</div>
                <div>Версия: {serverData.version}</div>
                <div>Размер мира: {serverData.worldsize}</div>
                <div>Размер дополнительных миров: {serverData.othersize}</div>
            </div>
            <div className={s.modslist}>

            </div>
        </div>
    )
}

export default Serverinfo