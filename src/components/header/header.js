import style from './header.module.scss'
import Nav from 'components/nav'
import { ReactComponent as PhoneIcon } from 'assets/img/phone.svg'
import { ReactComponent as MenuIcon } from 'assets/img/menu.svg'

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.logo}>
                ALEX. SHEVTSOV
            </div>
            <Nav />
            <div className={style.phone}>
                <button type='button' className={style.burger}>
                    <MenuIcon />
                </button>
                <a href="/">
                    <PhoneIcon />
                </a>
                <span>
                    8-345-123-34-45
                </span>
            </div>
        </header>
    )
}

export default Header