import s from './Serverinfo.module.css'

const Serverinfo = ({server}) => {
    const options = {
        IM: [
            "TabbyChat",
            "OptiFine",
            "Minecraft Client Fixer",
            "Journey Map",
            "Fancy Tab"
        ]
    }
    const mods = {
        IM: [
        "Industrial Craft",
        "Not Enough Items",
        "Tinkers Construct",
        "Ender IO",
        "Draconic Evolution",
        "Mantle",
        "Twilight Forest",
        "Waila",
        "Applied Energistics 2",
        "AE2 stuff",
        "Botania",
        "BloodMagic",
        "Avaritia",
        "Thaumcraft",
        "Baubles",
        "Brandons Core",
        "Cofh Core",
        "Minefactory Reloaded",
        "extra Utilities",
        "Iron Chest",
        "Ender Storage",
        "Better Questing",
        "Thaumic Tinkerer",
        "Thaumic Bases",
        "Thaumic Horizons",
        "Thaumic Energistics",
        "Thaumic Inventory Scanning",
        "Gadomancy",
        "DummyCore",
        "thermal-dynamics",
        "thermal-expansion",
        "thermal-foundation",
        "Gravitation-Suite-Neo",
        "Advanced Solar Panels",
        "gravitation-suite",
        "Nuclear-Control"
            ]
    }

    const servers = {
        IM: {
            datewipe: '14.04.2024',
            version: '1.7.10',
            worldsize: '10000',
            othersize: '5000'
        },
        SRPG: {
            datewipe: 'В разработке',
            version: 'В разработке',
            worldsize: 'В разработке',
            othersize: 'В разработке'
        }
    }

    const serverData = servers[server];

    return (
        <div className={s.server}>
            <img src="https://i.pinimg.com/originals/f5/f2/74/f5f27448c036af645c27467c789ad759.gif" alt="server-banner"
                 className={s.server_banner}/>
            <div className={s.server_info}>
                <div>Дата вайпа: {serverData.datewipe}</div>
                <div>Версия: {serverData.version}</div>
                <div>Размер мира: {serverData.worldsize}</div>
                <div>Размер дополнительных миров: {serverData.othersize}</div>
            </div>
            <div className={s.modslist}>
                <h3>Список опциональных модов сервера:</h3>
                <ul>
                    {options[server] && options[server].sort().map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
            <div className={s.modslist}>
                <h3>Список модов сервера:</h3>
                <ul>
                    {mods[server] && mods[server].sort().map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Serverinfo