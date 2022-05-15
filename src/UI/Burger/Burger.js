import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Burger.module.scss";
import { NavLink } from "react-router-dom";

const Burger = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


    return (
        <header className={classes.burger}>
            <div className={classes.burger__content}>
                <nav
                    className={`${classes.burger__content__nav} ${menuOpen && classes.isMenu}`}
                >
                    <ul>
                        <li>
                            <NavLink onClick={menuToggleHandler} className={({ isActive }) => (isActive ? 'burger__navigation__links--active' : 'burger__navigation__links--inactive')} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={menuToggleHandler} className={({ isActive }) => (isActive ? 'burger__navigation__links--active' : 'burger__navigation__links--inactive')} to="/tiempo-en-Madrid">Clima de Madrid</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={menuToggleHandler} className={({ isActive }) => (isActive ? 'burger__navigation__links--active' : 'burger__navigation__links--inactive')} to="/aparcamientos-publicos">Aparcamientos en Madrid</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={classes.burger__content__toggle}>
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
