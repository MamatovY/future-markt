import style from './form.module.scss'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { ReactComponent as CheckIcon } from 'assets/img/check.svg'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'

const Form = ({ setFetch, setLoading }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [checkActive, setCheckActive] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const checkboxRef = useRef(null);

    const handleBoxClick = () => {
        setCheckActive(!checkActive);
        if (checkboxRef.current) {
            checkboxRef.current.click();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && number && checkActive) {
            setLoading(true)
            setTimeout(() => {
                setName('')
                setNumber('')
                setCheckActive(false)
                setFetch(true);
                setLoading(false)
                setErrorMsg(false)
            }, 1000);

        } else {
            setErrorMsg(true);
        }
    }


    return (
        <div className={style.form}>
            <h2 className={style.title}>
                Закажите обратный звонок
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={style.input}
                    name='name'
                    placeholder='Александр' />
                <div className={style.error}>
                    {errorMsg}
                </div>

                <input type="text"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    className={style.input}
                    name='number'
                    placeholder='+79324564321' />

                <div className={style.faq}>
                    <input type="checkbox" id="agreeCheckbox"
                        ref={checkboxRef}
                        className={style.checkbox} />

                    <button type='button' className={style.box}
                        onClick={() => handleBoxClick()}>
                        {checkActive && <CheckIcon />}
                    </button>
                    <label onClick={() => setCheckActive(!checkActive)} htmlFor="agreeCheckbox" className={style.label} >Согласен на сохранение и обработку персональных данных</label>
                </div>

                <button type='submit'>
                    <motion.div whileHover={{ scale: 1.1 }} className={style.submit}>
                        <div>
                            Бесплатная консультация
                        </div>
                        <span>
                            <ArrowIcon />
                        </span>
                    </motion.div>
                </button>


                {errorMsg && <div className={style.error}>
                    Заполните все поля и дайте согласие
                </div>}
            </form>
        </div>
    )
}

export default Form