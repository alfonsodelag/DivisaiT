import './Header.scss';
import divisaItLogo from '../assets/images/divisait-logo.jpeg';
import logoMadrid from '../assets/images/logo-madrid.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <NavLink to="/">
                    <img src={divisaItLogo} />
                </NavLink>
            </div>
            <div className="header__navigation">
                <NavLink className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')} to="/tiempo-en-Madrid">Clima de Madrid</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')} to="/aparcamientos-publicos">Aparcamientos en Madrid</NavLink>
            </div>
            <div>
                <img src={logoMadrid} />
            </div>
        </header>
    )
}

export default Header;