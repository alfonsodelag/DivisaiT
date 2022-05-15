import React from 'react';
import './Header.scss';
import divisaItLogo from '../assets/images/divisait-logo.jpg';
import logoMadrid from '../assets/images/logo-madrid.png';
import { Link } from 'react-router-dom';
import Burger from '../UI/Burger/Burger';
import MediaQuery from 'react-responsive'

const Header = () => {

    return (
        <>
            <MediaQuery maxWidth={991}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
                    <Burger />
                    <Link style={{ display: 'flex', justifyContent: 'center' }} to="/">
                        <img style={{ width: '50%' }} src={divisaItLogo} />
                    </Link>
                    <div>
                        <img src={logoMadrid} />
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={992}>
                <header className="desktop-header">
                    <Link to="/">
                        <img style={{ width: '70%' }} className="header__logo" src={divisaItLogo} />
                    </Link>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }} className="header__navigation">
                        <Link
                            // style={{ color: 'white', textDecoration: 'none' }}
                            className={'header__navigation__links--active'}
                            to="/">
                            Home
                        </Link>
                        <Link
                            // style={{ color: 'white', textDecoration: 'none' }}
                            className={'header__navigation__links--active'}
                            to="/tiempo-en-Madrid">
                            Clima de Madrid
                        </Link>
                        <Link
                            // style={{ color: 'white', textDecoration: 'none' }}
                            className={'header__navigation__links--active'}
                            to="/aparcamientos-publicos">
                            Aparcamientos en Madrid
                        </Link>
                    </div>
                    <div>
                        <a href="https://www.madrid.es/portal/site/munimadrid">
                            <img src={logoMadrid} />
                        </a>
                    </div>
                </header >
            </MediaQuery >
        </>
    )
}

export default Header;
