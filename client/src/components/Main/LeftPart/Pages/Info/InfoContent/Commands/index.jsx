import s from './../InfoContent.module.css'
import commands from './commands.json'

const Commands = () => {
    return (
        <table className={s.info_table}>
            <tr>
                <th>Команда</th>
                <th>Описание</th>
            </tr>
            {commands.map((el, index) => (
                <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.description}</td>
                </tr>
            ))}

        </table>
    )
}

export default Commands