import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as CheckIcon } from 'assets/img/check.svg'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import style from './form.module.scss'

const Form = ({ setFetch, setLoading }) => {
    const [formData, setFormData] = useState({ name: '', number: '', agree: false });
    const [errorMsg, setErrorMsg] = useState('');

    const checkboxRef = useRef(null);

    const handleCheckboxClick = () => {
        setFormData({ ...formData, agree: !formData.agree });
        if (checkboxRef.current) checkboxRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.number && formData.agree) {
            setLoading(true);
            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify(formData));
                setFormData({ name: '', number: '', agree: false });
                setFetch(true);
                setLoading(false);
                setErrorMsg('');
            }, 1000);
        } else {
            setErrorMsg('Заполните все поля и дайте согласие');
        }
    }

    return (
        <div className={style.form}>
            <h2 className={style.title}>Закажите обратный звонок</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={style.input}
                    placeholder='Александр' />

                <input type="text"
                    value={formData.number}
                    onChange={e => setFormData({ ...formData, number: e.target.value })}
                    className={style.input}
                    placeholder='+79324564321' />

                <div className={style.faq}>
                    <input type="checkbox" id="agreeCheckbox" ref={checkboxRef} className={style.checkbox} />
                    <button type='button' className={style.box} onClick={handleCheckboxClick}>
                        {formData.agree && <CheckIcon />}
                    </button>
                    <label onClick={handleCheckboxClick} htmlFor="agreeCheckbox" className={style.label}>Согласен на сохранение и обработку персональных данных</label>
                </div>

                <button type='submit'>
                    <motion.div whileHover={{ scale: 1.1 }} className={style.submit}>
                        <div>Бесплатная консультация</div>
                        <span><ArrowIcon /></span>
                    </motion.div>
                </button>

                {errorMsg && <div className={style.error}>{errorMsg}</div>}
            </form>
        </div>
    )
}

export default Form;
