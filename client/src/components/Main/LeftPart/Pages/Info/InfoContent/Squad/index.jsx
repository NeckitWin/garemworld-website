import s from './Squad.module.css'

const Squad = () => {
    const roles = {
        Owner: [{
            icon: 'https://cdn.discordapp.com/avatars/429562004399980546/a_4d774f014a12ea92f6f24c27204107bf.gif',
            name: 'NeckitWin',
            role: 'Основатель и разработчик проекта',
            data: '01.04.2024'
        }],
        Admin: [
            {
                icon: '🛡️',
                name: 'NeckitWin',
                role: 'Администратор',
                data: '01.04.2024'
            }
        ]
    }
    console.log(roles)
    return (
        <div>
            <table className={s.table_roles}>
                <thead>
                <tr>
                    <th>Ник</th>
                    <th></th>
                    <th>Должность</th>
                </tr>
                </thead>
                <tbody>
                {
                    roles.Owner.map((el, index) => (
                        <tr key={index}>
                            <td><img src={el.icon} className={s.avatar} alt="avatar"/></td>
                            <td>{el.name}</td>
                            <td>{el.role}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default Squad