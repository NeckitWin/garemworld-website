import s from './Test.module.css'
import {useEffect} from "react";

const Test = () => {
    useEffect(() => {
        fetch('http://localhost:5000/test')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err=>console.log(err))
    }, []);
    return (
        <div className={s.test}>
            <h1>Test</h1>
        </div>
    )
}

export default Test