import { useEffect, useState } from 'react';
import style from './access.module.scss'
import { motion } from "framer-motion"

const Access = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    }, []);

    return user && (
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
                <div>
                    Имя: {user.name}
                </div>
                <div>
                    Номер: {user.number}
                </div>
                <div>
                    Согласие: {user.agree ? 'Да' : 'Нет'}
                </div>

            </motion.div>
            <div className={style.logo}>
                ALEX. SHEVTSOV
            </div>
        </>
    )
}

export default Access