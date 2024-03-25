import { useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import style from './feedback.module.scss'

import { ReactComponent as CheckIcon } from 'assets/img/check.svg'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import { ReactComponent as CrossIcon } from 'assets/img/cross.svg'

const Feedback = ({ activeForm, setActiveForm }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [checkActive, setCheckActive] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [fetch, setFetch] = useState(false)

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
            console.log('true');
            setFetch(true);
            setErrorMsg(false)
        } else {
            setErrorMsg(true);
        }
    }

    return (
        <>
            <AnimatePresence>
                {activeForm &&
                    <motion.div
                        initial={{
                            left: '50%',
                            top: '50%',
                            width: '10px',
                            height: '10px',
                            opacity: 0,
                        }}
                        animate={{
                            left: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        className={style.feedback}>

                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            exit={{ x: -100 }}
                            className={style.popup}>

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

                                        <div className={style.box}
                                            onClick={() => handleBoxClick()}>
                                            {checkActive && <CheckIcon />}
                                        </div>
                                        <label onClick={() => setCheckActive(!checkActive)} htmlFor="agreeCheckbox" className={style.label} >Согласен на сохранение и обработку персональных данных</label>
                                    </div>

                                    <div className={style.submit}>
                                        <div>
                                            Заказать обратный звонок
                                        </div>
                                        <button type='submit'>
                                            <ArrowIcon />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <button className={style.close} onClick={() => setActiveForm(false)}><CrossIcon /></button>

                            {errorMsg && <div className={style.error}>
                                Заполните все поля и дайте согласие
                            </div>}

                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Feedback