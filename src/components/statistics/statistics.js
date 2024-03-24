import style from './statistics.module.scss'

const Statistics = () => {
    return (
        <div className={style.statistics}>
            <div className={style.box}>
                <h3>
                    130+
                </h3>
                <div className={style.description}>
                    техника для достижения целей
                </div>
            </div>
            <div className={style.box}>
                <h3>
                    250%
                </h3>
                <div className={style.description}>
                    увеличение личной продуктивности
                </div>
            </div>
        </div>
    )
}

export default Statistics