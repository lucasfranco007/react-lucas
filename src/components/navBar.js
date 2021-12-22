import React from "react";
import logo from "../img/eldiegologo.png";
import CartWidget from "./CartWidget";
import "../styles/NavBarStyles.css";
import Common from "./Common";
import { NavLink } from "react-router-dom";

let cantidad = 4;

function Nav() {
    return (
        <nav>
            <ul className="nav_links">
                <NavLink to={`/`}><button>Home</button></NavLink>
                <li><NavLink to={"/category/buzos"}><Common.Enlace text="Buzos" clase={"nav_links"} /></NavLink></li>
                <li><NavLink to={"/category/remeras"}><Common.Enlace text="Remeras" clase={"nav_links"} /></NavLink></li>
                <li><NavLink to={"/category/pantalones"}><Common.Enlace text="Pantalones" clase={"nav_links"} /></NavLink></li>
                <li><NavLink to={"/category/zapatillas"}><Common.Enlace text="Zapatillas" clase={"nav_links"} /></NavLink></li>
            </ul>
        </nav>
    )
}

function LogoAndName() {
    return (
        <NavLink to={`/`}>
            <div className="logo-name-container">
                <img src={logo} className="logo" alt="logo" />
                <Common.Title text="EL DIEGO" clase={"title"} />
            </div>
        </NavLink>
    )
}

function NavBar() {
    return (
        <div className="navbar-container">
            <LogoAndName />
            <Nav />
            <CartWidget cantidad={cantidad} />
        </div>
    )
}

export default NavBar;