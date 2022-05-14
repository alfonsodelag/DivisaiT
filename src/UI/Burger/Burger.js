import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Burger.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Burger = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <nav
                    className={`${classes.header__content__nav} ${menuOpen && classes.isMenu}`}
                >
                    <ul>
                        <li>
                            <NavLink onClick={menuToggleHandler} className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={menuToggleHandler} className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')} to="/tiempo-en-Madrid">Clima de Madrid</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={menuToggleHandler} className={({ isActive }) => (isActive ? 'header__navigation__links--active' : 'header__navigation__links--inactive')} to="/aparcamientos-publicos">Aparcamientos en Madrid</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Burger;
