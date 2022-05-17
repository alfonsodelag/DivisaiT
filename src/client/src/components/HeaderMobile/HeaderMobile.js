import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../../UI/Burger/Burger';
import divisaItLogo from '../../assets/images/divisait-logo.jpg';
import logoMadrid from '../../assets/images/logo-madrid.png';

const HeaderMobile = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
            <Burger />
            <NavLink style={{ display: 'flex', justifyContent: 'center' }} to="/">
                <img style={{ width: '65%' }} src={divisaItLogo} />
            </NavLink>
            <div>
                <img src={logoMadrid} />
            </div>
        </div>
    )
}

export default HeaderMobile