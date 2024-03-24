import style from './mainTitle.module.scss'

const MainTitle = () => {
    return (
        <div className={style.mainTitle}>
            <h1 className={style.title}>
                Создаю условия для вашего успеха
            </h1>

            <div className={style.description}>
                Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий
            </div>
        </div>
    )
}

export default MainTitle