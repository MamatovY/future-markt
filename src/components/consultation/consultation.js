import style from './consultation.module.scss'

import { useState } from 'react'
import { motion } from 'framer-motion'

import Feedback from 'components/feedback'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'

const Consultation = () => {
    const [activeForm, setActiveForm] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setActiveForm(true)
    }

    return (
        <div className={style.consultation}>
            <motion.a whileHover={{ scale: 1.1 }} href='/' className={style.buttonWhite}>
                <div>
                    Записаться на консультацию
                </div>
                <span>
                    <ArrowIcon />
                </span>
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href='/' onClick={handleClick} className={style.buttonOutline}>
                <div>
                    Бесплатная консультация
                </div>
                <span>
                    <ArrowIcon />
                </span>
            </motion.a>

            <Feedback activeForm={activeForm} setActiveForm={setActiveForm} />
        </div>
    )
}

export default Consultation