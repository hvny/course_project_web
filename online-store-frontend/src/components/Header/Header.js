import { Link } from "react-router-dom";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import {Menu} from "@mui/material";
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import Navigation from "./Navigation/Navigation";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isButtonsListActive, setIsButtonsListActive] = useState(false);

    function handleMenulick() {
        setIsButtonsListActive(!isButtonsListActive);
    } 

    function handleCartClick() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link"><img src={logo} className="header__logo" alt="Логотип компании"/></Link>
                <Navigation />
                <div className="header__phone-container">
                    <LocalPhoneIcon size="large" />
                    <p className="header__phone-number">8 800 770-71-18</p>    
                </div>
                <IconButton aria-label="Menu" style={{color: "#ffffff"}} className="header__button_menu" onClick={handleMenulick}>
                    <MenuIcon />
                </IconButton>
                {
                    isButtonsListActive ?
                    <Menu open={isButtonsListActive} onClose={handleMenulick}>
                        <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick} additionalClassName="header__buttons_visible"/>
                        <Navigation />
                    </Menu>
                    :
                    <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick} additionalClassName={`${isButtonsListActive ? "header__buttons_hidden" : ""}`} />
                }
            </div>
        </header>
    );
}

export default Header;