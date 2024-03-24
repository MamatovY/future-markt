import style from './nav.module.scss'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <a href="/">
                Обо мне
            </a>

            <a href="/">
                Наставничество
            </a>

            <a href="/">
                Мероприятия
            </a>

            <a href="/">
                Кейсы
            </a>

            <a href="/">
                Отзывы
            </a>

            <a href="/">
                Контакты
            </a>
        </nav>
    )
}

export default Nav