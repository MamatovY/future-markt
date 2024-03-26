import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import style from './feedback.module.scss'


import { ReactComponent as CrossIcon } from 'assets/img/cross.svg'
import Form from 'components/form'
import Access from 'components/access'

const Feedback = ({ activeForm, setActiveForm }) => {
    const [fetch, setFetch] = useState(false)
    const [loading, setLoading] = useState(false)

    console.log(fetch);

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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
                                    width="200px"
                                    height="200px"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <g transform="rotate(0 50 50)">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="32"
                                            fill="none"
                                            stroke="#ffffff"
                                            strokeWidth="8"
                                            strokeDasharray="50.26548245743669 50.26548245743669"
                                            transform="rotate(272.317 50 50)"
                                        >
                                            <animateTransform
                                                attributeName="transform"
                                                type="rotate"
                                                repeatCount="indefinite"
                                                dur="1s"
                                                keyTimes="0;1"
                                                values="0 50 50;360 50 50"
                                            />
                                        </circle>
                                    </g>
                                </svg>
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