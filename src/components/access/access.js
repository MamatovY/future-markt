import style from './access.module.scss'
import { motion } from "framer-motion"

const Access = () => {
    return (
        <>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ opacity: 0 }} className={style.access}>
                <h2 className={style.main}>
                    Спасибо за заявку
                </h2>

                <h3>
                    Я обязательно свяжусь с вами в ближайшее время.
                </h3>

            </motion.div>
            <div className={style.logo}>
                ALEX. SHEVTSOV
            </div>
        </>
    )
}

export default Access