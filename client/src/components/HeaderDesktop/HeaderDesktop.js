import React from "react";
import { NavLink } from "react-router-dom";
import divisaItLogo from "../../assets/images/divisait-logo.jpg";
import logoMadrid from "../../assets/images/logo-madrid.png";
import "./HeaderDesktop.scss";

const HeaderDesktop = () => {
  return (
    <header className="desktop-header">
      <NavLink to="/">
        <img
          className="desktop-header__logo"
          src={divisaItLogo}
          alt="divisa-it"
        />
      </NavLink>
      <div className="desktop-header__navigation">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "desktop-header__navigation__links--active"
              : "desktop-header__navigation__links--inactive"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "desktop-header__navigation__links--active"
              : "desktop-header__navigation__links--inactive"
          }
          to="/tiempo-en-Madrid"
        >
          Clima de Madrid
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "header__navigation__links--active"
              : "header__navigation__links--inactive"
          }
          to="/aparcamientos-publicos"
        >
          Aparcamientos en Madrid
        </NavLink>
      </div>
      <div>
        <a href="https://www.madrid.es/portal/site/munimadrid">
          <img src={logoMadrid} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default HeaderDesktop;
