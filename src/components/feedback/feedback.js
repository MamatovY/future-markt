import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import style from './feedback.module.scss'


import { ReactComponent as CrossIcon } from 'assets/img/cross.svg'
import { ReactComponent as Loader } from 'assets/img/loader.svg'

import Form from 'components/form'
import Access from 'components/access'

const Feedback = ({ activeForm, setActiveForm }) => {
    const [fetch, setFetch] = useState(false)
    const [loading, setLoading] = useState(false)


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

                            {loading ?
                                <Loader />
                                :
                                fetch ?
                                    <Access />
                                    :
                                    <Form setLoading={setLoading} setFetch={setFetch} />
                            }
                            <button className={style.close} onClick={() => {
                                setFetch(false)
                                setActiveForm(false)
                            }}><CrossIcon /></button>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Feedback