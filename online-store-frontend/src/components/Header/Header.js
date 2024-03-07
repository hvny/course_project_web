import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';

import Navigation from "./Navigation/Navigation";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    // const [isMenuListActive, setIsMenuListActive] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleCartClick() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link"><img src={logo} className="header__logo" alt="Логотип компании"/></Link>

                <div className="header__content">
                    <Navigation />
                    <div className="header__phone-container">
                        <LocalPhoneIcon size="large" />
                        <p className="header__phone-number">8 800 770-71-18</p>    
                    </div>
                    <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick}  />
                </div>

                <div className="header__button_menu">
                    <IconButton aria-describedby={id} aria-label="Menu" onClick={handleClick}>
                        <MenuIcon className="header__icon_menu" />
                    </IconButton>
                </div>  
                <Popover 
                    id={id} 
                    open={open} 
                    anchorEl={anchorEl} 
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}} 
                    className="header__popover"
                    style={{zIndex: "10"}}
                >
                    <div className="header__popover-content">
                        <Navigation handlePopoverClose={handleClose} />  
                        <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick} />
                    </div>
                </Popover>
            </div>
        </header>
    );
}

export default Header;