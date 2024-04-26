import s from './Panel.module.css';

const Panel = () => {
    const handleSubmit = async () => {

    }
    return (
        <form onSubmit={handleSubmit} className={s.add_skin}>
            <div>
            <label htmlFor="skin">Загрузить скин</label><br/>
            <input type="file" name="skin"/><br/>
            </div>
            <div>
            <label htmlFor="cloak">Загрузить плащ</label><br/>
            <input type="file" name="cloak"/><br/>
            </div>
            <div>
            <label htmlFor="email">Изменить аватар</label><br/>
            <input type="file" name="avatar"/><br/>
            </div>
            <button>Сохранить</button>

        </form>
    )
}

export default Panel;