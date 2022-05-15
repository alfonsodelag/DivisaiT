import React from 'react';
import './Header.scss';
import divisaItLogo from '../assets/images/divisait-logo.jpg';
import logoMadrid from '../assets/images/logo-madrid.png';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';

const Header = () => {

    return (
        <>
            <MediaQuery maxWidth={991}>
                <HeaderMobile />
            </MediaQuery>
            <MediaQuery minWidth={992}>
                <HeaderDesktop />
                {/* <header className="desktop-header">
                    <NavLink to="/">
                        <img style={{ width: '70%' }} className="header__logo" src={divisaItLogo} />
                    </NavLink>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }} className="header__navigation">
                        <NavLink
                            // style={{ color: 'white', textDecoration: 'none' }}
                            className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            // style={{ color: 'white', textDecoration: 'none' }}
                            className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')}
                            to="/tiempo-en-Madrid">
                            Clima de Madrid
                        </NavLink>
                        <NavLink
                            // style={{ color: 'white', textDecoration: 'none' }}
                            className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')}
                            to="/aparcamientos-publicos">
                            Aparcamientos en Madrid
                        </NavLink>
                    </div>
                    <div>
                        <a href="https://www.madrid.es/portal/site/munimadrid">
                            <img src={logoMadrid} />
                        </a>
                    </div>
                </header > */}
            </MediaQuery >
        </>

    )
}

export default Header;