import { useState } from 'react'
import style from './consultation.module.scss'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import Feedback from 'components/feedback'

const Consultation = () => {
    const [activeForm, setActiveForm] = useState(false)

    return (
        <div className={style.consultation}>
            <div className={style.buttonWhite}>
                <div>
                    Записаться на консультацию
                </div>
                <button>
                    <ArrowIcon />
                </button>
            </div>

            <div className={style.buttonOutline}>
                <div>
                    Бесплатная консультация
                </div>
                <button type='button' onClick={() => setActiveForm(true)}>
                    <ArrowIcon />
                </button>
            </div>
            <Feedback activeForm={activeForm} setActiveForm={setActiveForm} />
        </div>
    )
}

export default Consultation