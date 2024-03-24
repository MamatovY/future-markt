import style from './header.module.scss'
import Nav from 'components/nav'
import { ReactComponent as PhoneIcon } from 'assets/img/phone.svg'


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                ALEX.SHEVTSOV
            </div>
            <Nav />
            <div className={style.phone}>
                <PhoneIcon />
            </div>
        </div>
    )
}

export default Header