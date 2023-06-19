import css from '../styles/Navigation.module.css'
import { Link } from 'styles/Link.styled'

export default function Navigation() {
    return (
        <>
            <nav>
                <img className={css.logo__image} alt='Tea Shop Logo' src={require(`../images/logo.png`)}></img>
                <Link to='/'>Головна</Link>
                <Link to='/addTea'>Додати чай</Link>
            </nav>
        </>
    )
}