import s from './Panel.module.css';
import {useState, useRef} from "react";
import axios from "axios";

const Panel = () => {
    const [error, setError] = useState('');
    const skinFile = useRef(null);
    const cloakFile = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (skinFile.current.files.length > 0) {
            const formData = new FormData();
            formData.append('skin', skinFile.current.files[0]);

            axios.post('https://api.garemworld.su/uploadskin', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res=>setError(res.data.message)).catch(() => {
                axios.post('http://localhost:8081/uploadskin', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res=>setError(res.data.message)).catch(err => console.log(err));
            });
        }
        if (cloakFile.current.files.length > 0) {
            const formData = new FormData();
            formData.append('cloak', cloakFile.current.files[0]);

            axios.post('https://api.garemworld.su/uploadcloak', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res=>setError(res.data.message)).catch(() => {
                axios.post('http://localhost:8081/uploadcloak', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res=>setError(res.data.message)).catch(err => console.log(err));
            });
        }
    }
    return (
        <form onSubmit={handleSubmit} className={s.add_skin}>
            <div>

                <label htmlFor="skin">Загрузить скин</label><br/>
                <input type="file" name="skin" ref={skinFile}/><br/>
            </div>
            <div>
                <label htmlFor="cloak">Загрузить плащ</label><br/>
                <input type="file" name="cloak" ref={cloakFile}/><br/>
            </div>
            <div>
            <label htmlFor="email">Изменить аватар</label><br/>
            <input type="file" name="avatar"/><br/>
            </div>
            <button>Сохранить</button>
            <p className={s.error}>{error}</p>
        </form>
    )
}

export default Panel;