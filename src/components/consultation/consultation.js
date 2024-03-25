import style from './consultation.module.scss'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'

const Consultation = () => {
    return (
        <div className={style.consultation}>
            <div className={style.buttonWhite}>
                <div>
                    Записаться на консультацию
                </div>
                <a href="/">
                    <ArrowIcon />

                </a>
            </div>

            <div className={style.buttonOutline}>
                <div>
                    Бесплатная консультация
                </div>
                <a href="/">
                    <ArrowIcon />
                </a>
            </div>
        </div>
    )
}

export default Consultation